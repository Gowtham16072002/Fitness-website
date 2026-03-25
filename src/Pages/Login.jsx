import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);

    if (!emailError && !passwordError) {
      alert("Login successful");
      navigate("/");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <p>
            Log in to continue your fitness journey and access your workouts,
            plans, and progress.
          </p>
        </div>

        <div className="auth-right">
          <h1>Login</h1>

          <form onSubmit={handleSubmit} noValidate>
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.email}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.password}</div>

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;