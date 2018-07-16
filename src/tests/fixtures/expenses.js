import moment from "moment";

export default [
  {
    id: "1",
    description: "test exp",
    note: "",
    amount: 199,
    createdAt: 0
  },
  {
    id: "2",
    description: "cre asd",
    note: "",
    amount: 199000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "cre wsa 3",
    note: "",
    amount: 1000,
    createdAt: moment()
      .add(4, "days")
      .valueOf()
  }
];
