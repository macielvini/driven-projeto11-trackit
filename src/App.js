import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import { UserContextProvider } from "./context/UserContext";
import Habits from "./pages/HabitsPage/Habits";
import History from "./pages/HistoryPage/History";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import Today from "./pages/TodayPage/Today";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/today" element={<Today />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}
