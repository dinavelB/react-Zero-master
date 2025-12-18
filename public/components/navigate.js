import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Contact } from "./Contact";
import { Home } from "./Home";

//#Routers are pages. use for navigating
//#check the home jsx
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Navigate() {
  return /*#__PURE__*/_jsx(BrowserRouter, {
    children: /*#__PURE__*/_jsxs(Routes, {
      children: [/*#__PURE__*/_jsx(Route, {
        path: "/",
        element: /*#__PURE__*/_jsx(Home, {})
      }), /*#__PURE__*/_jsx(Route, {
        path: "/login",
        element: /*#__PURE__*/_jsx(Login, {})
      }), /*#__PURE__*/_jsx(Route, {
        path: "/contact",
        element: /*#__PURE__*/_jsx(Contact, {})
      })]
    })
  });
}