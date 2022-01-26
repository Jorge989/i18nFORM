import React, { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const [controlAddButton, setControlAddButton] = useState(false);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <UserContext.Provider
      value={{ users, setUsers, controlAddButton, setControlAddButton }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  const { users, setUsers, controlAddButton, setControlAddButton } = context;

  return { users, setUsers, controlAddButton, setControlAddButton };
}
