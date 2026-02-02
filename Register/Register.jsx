import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";   // ❌ Ye pehle missing tha — ISI LIYE ERROR A RAHA THA
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/auth/register", {
        name,
        email,
        password,
        role: "admin",
      });

      console.log("Response:", res.data); // Debugging ke liye

      setError("");
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.log("Error:", err); // Console mein full error dikhega
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit" className="button">Register</button>
      </form>
      <p className="para">
        Already have an account? <Link to="/login" className="register-link">Login</Link>
      </p>
    </div>
  );
};

export default Register;
