import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const nameRegex = /^[A-Za-z ]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value) {
        error = "Name is required";
      } else if (!nameRegex.test(value)) {
        error = "Name should be 3 to 20 letters only";
      }
    }

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "phone") {
      if (!value) {
        error = "Phone number is required";
      } else if (!phoneRegex.test(value)) {
        error = "Phone number must be exactly 10 digits";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        error = "Confirm password is required";
      } else if (value !== formData.password) {
        error = "Passwords do not match";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const phoneError = validateField("phone", formData.phone);
    const passwordError = validateField("password", formData.password);
    const confirmPasswordError = validateField(
      "confirmPassword",
      formData.confirmPassword,
    );

    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      alert("Signup successful");
      navigate("/login");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Create Account</h2>
          <p>
            Join our fitness community and start tracking your workouts,
            wellness goals, and transformation.
          </p>
        </div>

        <div className="auth-right">
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit} noValidate>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.name}</div>

            <label>Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.email}</div>

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.phone}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.password}</div>

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.confirmPassword}</div>

            <button type="submit" className="auth-btn">
              Sign Up
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
