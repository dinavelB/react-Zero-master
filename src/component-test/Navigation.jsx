import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { Home } from "./Home";
import { LoginPage } from "./Login";

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
