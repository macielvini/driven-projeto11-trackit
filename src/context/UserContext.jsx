import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  });
  const [userInfo, setUserInfo] = useLocalStorage("userInfo");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
