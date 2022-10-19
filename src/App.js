import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import Habits from "./pages/HabitsPage/Habits";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";

export const Context = createContext();

export default function App() {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });

  return (
    <>
      <Context.Provider value={user}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/habits" element={<Habits />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
