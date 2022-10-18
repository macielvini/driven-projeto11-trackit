import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import Habits from "./pages/HabitsPage/Habits";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
