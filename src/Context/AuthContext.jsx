import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load user from localStorage on refresh
  useEffect(() => {
    const fetchUser = async () => {
      let res = await fetch("http://localhost:3000/auth/profile", {
        credentials: "include",
      });
      let userData = await res.json();
      console.log(userData.user);
      setUser(userData.user);
    };
    fetchUser();
  }, []);

  // login function
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // logout function
  const logout = async () => {
    try {
      await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error(err);
    }

    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
