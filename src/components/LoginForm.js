import React, { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

function LoginForm() {
  const { login } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        Name
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit" className="btn primary">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
