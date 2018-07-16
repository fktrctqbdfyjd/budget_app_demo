import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
  const expenseData = {
    description: "test",
    amount: 123456,
    createdAt: 1000,
    note: "test amount"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
