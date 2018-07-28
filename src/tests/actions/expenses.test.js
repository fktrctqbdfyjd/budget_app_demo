import configureMockStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import {
  addExpense,
  startAddExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import db from "../../firebase/firebase";

const createMockStore = configureMockStore([ReduxThunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "asdf" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "asdf"
  });
});

test("should setup edit expense object", () => {
  const action = editExpense("1234", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: { note: "new note value" }
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "dj app",
    amount: 1234,
    note: "dj eban",
    createdAt: 10000
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
//});

test("should add expense with defaults to database and store", () => {
  const store = createMockStore({});
  const expenseDefault = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };

  store
    .dispatch(startAddExpense(expenseDefault))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return db.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

// test("should setup add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
