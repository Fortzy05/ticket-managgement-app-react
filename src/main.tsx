import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { TicketProvider } from "./context/TicketContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TicketProvider>
          <App />
          <Toaster position="top-right" richColors />
        </TicketProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
