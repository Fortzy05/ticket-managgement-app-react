import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // ✅ Load saved session from localStorage safely
  useEffect(() => {
    const storedUser = localStorage.getItem("ticketapp_session");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        // Ensure parsed data has expected structure
        if (parsed && parsed.email && parsed.password) {
          setUser(parsed);
        } else if (typeof storedUser === "string") {
          // fallback for legacy plain string sessions
          setUser({ email: storedUser, password: "" });
        }
      } catch {
        // fallback if not valid JSON (from older sessions)
        setUser({ email: storedUser, password: "" });
      }
    }
  }, []);

  // ✅ Login user and persist session
  const login = (email: string, password: string) => {
    const savedUser = localStorage.getItem("ticketapp_user");
    if (!savedUser) throw new Error("User not found");

    const parsed = JSON.parse(savedUser);
    if (parsed.email !== email || parsed.password !== password)
      throw new Error("Invalid credentials");

    localStorage.setItem("ticketapp_session", JSON.stringify(parsed));
    setUser(parsed);
  };

  // ✅ Signup new user
  const signup = (email: string, password: string) => {
    const newUser = { email, password };
    localStorage.setItem("ticketapp_user", JSON.stringify(newUser));
    localStorage.setItem("ticketapp_session", JSON.stringify(newUser));
    setUser(newUser);
  };

  // ✅ Logout: only remove session (tickets remain)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("ticketapp_session");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
