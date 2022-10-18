import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import Login from "./pages/LoginPage/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
