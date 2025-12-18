import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { Home } from "./Home";
import { LoginPage } from "./Login";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Navigation() {
  return /*#__PURE__*/_jsx(BrowserRouter, {
    children: /*#__PURE__*/_jsxs(Routes, {
      children: [/*#__PURE__*/_jsx(Route, {
        path: "/",
        element: /*#__PURE__*/_jsx(CreateAccount, {})
      }), /*#__PURE__*/_jsx(Route, {
        path: "/login",
        element: /*#__PURE__*/_jsx(LoginPage, {})
      }), /*#__PURE__*/_jsx(Route, {
        path: "/home",
        element: /*#__PURE__*/_jsx(Home, {})
      })]
    })
  });
}