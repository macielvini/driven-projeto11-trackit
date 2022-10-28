import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    id: 0,
    name: undefined,
    email: undefined,
    password: undefined,
    doneToday: 0,
    image: undefined,
    token: undefined,
    // image: localStorage.getItem("image"),
    // token: localStorage.getItem("token"),
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
