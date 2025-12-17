import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../component-test/Home";
import { LoginPage } from "../component-test/Login";
import CreateAccount from "./CreateAccount";

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
