console.log("test");

//Higher order component - component that renders another component

//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>info</h1>
    <p>info is {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>this is private info not for share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please log in</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="details" />,
  document.getElementById("app")
);
