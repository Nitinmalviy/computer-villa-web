import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the type for UserContext
interface UserContextType {
  user: any;
  setUser: (user: any) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;
}

// Initialize the context with default values
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  // Initialize user and authentication state from localStorage
  const storedUser = localStorage.getItem("user");
  const storedIsAuthenticated = localStorage.getItem("isAuthenticated");

  const [user, setUser] = useState<any>(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    storedIsAuthenticated === "true"
  );

  // Save user data and authentication status to localStorage whenever they change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [user, isAuthenticated]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
