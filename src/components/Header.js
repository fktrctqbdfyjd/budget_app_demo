import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Budget app</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      help
    </NavLink>
  </div>
);
export default Header;
