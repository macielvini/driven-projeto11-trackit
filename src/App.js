import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import Habits from "./pages/HabitsPage/Habits";
import History from "./pages/HistoryPage/History";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import Today from "./pages/TodayPage/Today";

export const Context = createContext();

export default function App() {
  const [user, setUser] = useState({
    id: 0,
    name: undefined,
    image: localStorage.getItem("image"),
    email: undefined,
    password: undefined,
    // token: localStorage.getItem("token"),
    doneToday: 0,
  });

  // localStorage.setItem("token", user.token);
  localStorage.setItem("image", user.image);

  return (
    <>
      <Context.Provider value={user}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/today" element={<Today setUser={setUser} />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
