console.log("redux");

import { createStore } from "redux";

// Action generators - func, return action obj

// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

// const resetCount = ({ resetValue = 0 } = {}) => ({
//   type: "RESET",
//   resetValue
// });
const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ setValue }) => ({
  type: "SET",
  setValue
});

//Reducers
// reducer = pure func
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      // const incrementBy =
      //   typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        // count: action.resetValue
        count: 0
      };
    case "SET":
      return {
        count: action.setValue
      };
    default:
      return state;
  }
  return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setValue: 101 }));
