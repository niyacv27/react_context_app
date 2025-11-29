import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function DeepChildContext() {
  const { user } = useContext(UserContext);

  return (
    <p>
      DeepChild (with Context) sees logged-in user:{" "}
      {user ? user.name : "no user logged in"}
    </p>
  );
}

function MiddleContext() {
  return (
    <div>
      <p>MiddleContext: I don't receive any props at all!</p>
      <DeepChildContext />
    </div>
  );
}

function ContextSolutionExample() {
  return (
    <div className="card">
      <h3>Context Solution Example</h3>
      <MiddleContext />
    </div>
  );
}

export default ContextSolutionExample;
