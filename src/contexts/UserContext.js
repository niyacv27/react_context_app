import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  
  const [apiUser, setApiUser] = useState(null);
  const [loadingApiUser, setLoadingApiUser] = useState(true);
  const [apiError, setApiError] = useState(null);

  
  useEffect(() => {
    async function fetchApiUser() {
      try {
        setLoadingApiUser(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch API user");
        }
        const data = await res.json();
        setApiUser(data);
        setApiError(null);
      } catch (err) {
        setApiError(err.message);
      } finally {
        setLoadingApiUser(false);
      }
    }

    fetchApiUser();
  }, []);

  
  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  const login = (name, email) => {
    setUser({ name, email });
  };

  const logout = () => {
    setUser(null);
  };

  const updateName = (newName) => {
    if (user) {
      setUser({ ...user, name: newName });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        updateName,
        apiUser,
        loadingApiUser,
        apiError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
