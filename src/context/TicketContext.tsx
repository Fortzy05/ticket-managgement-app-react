// context/TicketContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface Ticket {
  id: string;
  title: string;
  description?: string;
  status: "open" | "in_progress" | "closed";
  priority?: string;
  createdAt: string;
}

interface TicketContextType {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  updateTicket: (ticket: Ticket) => void;
  deleteTicket: (id: string) => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // ✅ Load tickets from localStorage when app starts
  useEffect(() => {
    const storedTickets = localStorage.getItem("tickets");
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  // ✅ Save tickets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (ticket: Ticket) => {
    setTickets((prev) => [...prev, ticket]);
  };

  const updateTicket = (updated: Ticket) => {
    setTickets((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const deleteTicket = (id: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TicketContext.Provider
      value={{ tickets, addTicket, updateTicket, deleteTicket }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context)
    throw new Error("useTickets must be used within a TicketProvider");
  return context;
};
