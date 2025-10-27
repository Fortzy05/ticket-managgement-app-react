import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (session) setUser(session);
  }, []);

  const login = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (!existingUser) throw new Error("Invalid credentials");

    localStorage.setItem("ticketapp_session", email);
    setUser(email);
    navigate("/dashboard");
  };

  const signup = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find(
      (u: { email: string }) => u.email === email
    );
    if (existingUser) throw new Error("User already exists");

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("ticketapp_session", email);
    setUser(email);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
