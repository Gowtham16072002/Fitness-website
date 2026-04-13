// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../Styles/Auth.css";

// function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const nameRegex = /^[A-Za-z ]{3,20}$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phoneRegex = /^[0-9]{10}$/;

//   const validateField = (name, value) => {
//     let error = "";

//     if (name === "name") {
//       if (!value) {
//         error = "Name is required";
//       } else if (!nameRegex.test(value)) {
//         error = "Name should be 3 to 20 letters only";
//       }
//     }

//     if (name === "email") {
//       if (!value) {
//         error = "Email is required";
//       } else if (!emailRegex.test(value)) {
//         error = "Enter a valid email address";
//       }
//     }

//     if (name === "phone") {
//       if (!value) {
//         error = "Phone number is required";
//       } else if (!phoneRegex.test(value)) {
//         error = "Phone number must be exactly 10 digits";
//       }
//     }

//     if (name === "password") {
//       if (!value) {
//         error = "Password is required";
//       } else if (value.length < 6) {
//         error = "Password must be at least 6 characters";
//       }
//     }

//     if (name === "confirmPassword") {
//       if (!value) {
//         error = "Confirm password is required";
//       } else if (value !== formData.password) {
//         error = "Passwords do not match";
//       }
//     }

//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));

//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     validateField(name, value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const nameError = validateField("name", formData.name);
//     const emailError = validateField("email", formData.email);
//     const phoneError = validateField("phone", formData.phone);
//     const passwordError = validateField("password", formData.password);
//     const confirmPasswordError = validateField(
//       "confirmPassword",
//       formData.confirmPassword,
//     );

//     if (
//       !nameError &&
//       !emailError &&
//       !phoneError &&
//       !passwordError &&
//       !confirmPasswordError
//     ) {
//       alert("Signup successful");
//       navigate("/login");
//     }
//   };

//   return (
//     <section className="auth-page">
//       <div className="auth-card">
//         <div className="auth-left">
//           <h2>Create Account</h2>
//           <p>
//             Join our fitness community and start tracking your workouts,
//             wellness goals, and transformation.
//           </p>
//         </div>

//         <div className="auth-right">
//           <h1>Sign Up</h1>

//           <form onSubmit={handleSubmit} noValidate>
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.name}</div>

//             <label>Email Address</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.email}</div>

//             <label>Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.phone}</div>

//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Create password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.password}</div>

//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.confirmPassword}</div>

//             <button type="submit" className="auth-btn">
//               Sign Up
//             </button>
//           </form>

//           <p className="auth-switch">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SignUp;






import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    passWord: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    passWord: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const nameRegex = /^[A-Za-z ]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName") {
      if (!value) {
        error = "Name is required";
      } else if (!nameRegex.test(value)) {
        error = "Name should be 3 to 20 letters only";
      }
    }

    if (name === "emailAddress") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "phoneNumber") {
      if (!value) {
        error = "Phone number is required";
      } else if (!phoneRegex.test(value)) {
        error = "Phone number must be exactly 10 digits";
      }
    }

    if (name === "passWord") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        error = "Confirm password is required";
      } else if (value !== formData.passWord) {
        error = "Passwords do not match";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));0

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);

    if (name === "passWord" && formData.confirmPassword) {
      validateField("confirmPassword", formData.confirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullNameError = validateField("fullName", formData.fullName);
    const emailError = validateField("emailAddress", formData.emailAddress);
    const phoneError = validateField("phoneNumber", formData.phoneNumber);
    const passwordError = validateField("passWord", formData.passWord);
    const confirmPasswordError = validateField(
      "confirmPassword",
      formData.confirmPassword
    );

    if (
      fullNameError ||
      emailError ||
      phoneError ||
      passwordError ||
      confirmPasswordError
    ) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message || "Signup successful");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error.message);
      alert("Something went wrong while signing up");
    } finally {
      setLoading(false);
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
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.fullName}</div>

            <label>Email Address</label>
            <input
              type="text"
              name="emailAddress"
              placeholder="Enter your email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.emailAddress}</div>

            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.phoneNumber}</div>

            <label>Password</label>
            <input
              type="password"
              name="passWord"
              placeholder="Create password"
              value={formData.passWord}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.passWord}</div>

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.confirmPassword}</div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
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
