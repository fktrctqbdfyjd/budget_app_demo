import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
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

    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
