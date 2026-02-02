import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ❌ Missing tha, add karna zaroori hai
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      console.log("Login response:", res.data); // debugging
      localStorage.setItem("token", res.data.token); // store JWT
      setError("");
      navigate("/dashboard"); // go to Dashboard after login
    } catch (err) {
      console.log("Login error:", err); // debugging
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">Login</button>
      </form>
      <p className="para">
        Don't have an account? <Link to="/register"className="login-link">Register</Link>
      </p>
    </div>
  );
}

export default Login;
