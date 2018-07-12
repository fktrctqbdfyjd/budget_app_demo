import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import NewExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import AddExpensePage from "../components/AddExpense";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
