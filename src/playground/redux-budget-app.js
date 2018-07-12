console.log("app run");
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ idToRemove } = {}) => ({
  //{} = {} (default)
  type: "REMOVE_EXPENSE",
  idToRemove
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
//SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});
//SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.idToRemove); //!use deconstruction on filters
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//Filters reducers
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//New store --------------------------------------------------------------------
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
//store subscribe ---------------------------------------------------------------
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//dispatches---------------------------------------------------------------------

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 500, createdAt: -1000 })
);

// store.dispatch(removeExpense({ idToRemove: expenseOne.expense.id }));

// store.dispatch(
//   editExpense(expenseTwo.expense.id, {
//     description: "edited!!!!!!!!!!",
//     amount: 500
//   })
// );

store.dispatch(setTextFilter("e"));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//-------------------------------------------------------------------------------

//demo state:
const demoState = {
  expenses: [
    {
      id: "sadasdasd",
      description: "random rent",
      note: "payment haha",
      amount: 123456,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined //date or amount
  }
};
