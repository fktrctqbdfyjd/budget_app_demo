import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} $$$ Created at: {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
