import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../component-test/Home";
import { LoginPage } from "../component-test/Login";
export function Navigation() {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(LoginPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/home",
    element: /*#__PURE__*/React.createElement(Home, null)
  })));
}