// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../Styles/Auth.css";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     emailAddress: "",
//     passWord: "",
//   });

//   const [errors, setErrors] = useState({
//     emailAddress: "",
//     passWord: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const validateField = (name, value) => {
//     let error = "";

//     if (name === "emailAddress") {
//       if (!value) {
//         error = "Email is required";
//       } else if (!emailRegex.test(value)) {
//         error = "Enter a valid email address";
//       }
//     }

//     if (name === "passWord") {
//       if (!value) {
//         error = "Password is required";
//       } else if (value.length < 6) {
//         error = "Password must be at least 6 characters";
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emailError = validateField("emailAddress", formData.emailAddress);
//     const passwordError = validateField("passWord", formData.passWord);

//     if (emailError || passwordError) {
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch("http://localhost:3000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert(data.message || "Login successful");

//         // optional: save user in localStorage
//         localStorage.setItem("user", JSON.stringify(data.user));

//         navigate("/");
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong while logging in");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="auth-page">
//       <div className="auth-card">
//         <div className="auth-left">
//           <h2>Welcome Back</h2>
//           <p>
//             Log in to continue your fitness journey and access your workouts,
//             plans, and progress.
//           </p>
//         </div>

//         <div className="auth-right">
//           <h1>Login</h1>

//           <form onSubmit={handleSubmit} noValidate>
//             <label>Email Address</label>
//             <input
//               type="text"
//               name="emailAddress"
//               placeholder="Enter your email"
//               value={formData.emailAddress}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.emailAddress}</div>

//             <label>Password</label>
//             <input
//               type="password"
//               name="passWord"
//               placeholder="Enter your password"
//               value={formData.passWord}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.passWord}</div>

//             <button type="submit" className="auth-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="auth-switch">
//             Don’t have an account? <Link to="/signup">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    emailAddress: "",
    passWord: "",
  });

  const [errors, setErrors] = useState({
    emailAddress: "",
    passWord: "",
  });

  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "emailAddress") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "passWord") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateField("emailAddress", formData.emailAddress);
    const passwordError = validateField("passWord", formData.passWord);

    if (emailError || passwordError) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      console.log(response);

      const data = await response.json();

      console.log(data);

      if (data.success) {
        alert(data.message || "Login successful");

        // ✅ IMPORTANT: SAVE TOKEN
        localStorage.setItem("token", data.token);

        // optional: save user
        localStorage.setItem("user", JSON.stringify(data.user));

        // 👉 if admin → go admin panel
        if (data.user.role === "admin") {
          login(data.user);
          navigate("/admin/dashboard");
        } else {
          login(data.user);
          navigate("/");
        }
        
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong while logging in");
    } finally {
      setLoading(false);
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
              name="emailAddress"
              placeholder="Enter your email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.emailAddress}</div>

            <label>Password</label>
            <input
              type="password"
              name="passWord"
              placeholder="Enter your password"
              value={formData.passWord}
              onChange={handleChange}
            />
            <div className="auth-error">{errors.passWord}</div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
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
