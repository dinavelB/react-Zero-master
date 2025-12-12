import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Contact } from "./Contact";
import { Home } from "./Home";

//#Routers are pages. use for navigating
//#check the home jsx
export function Navigate() {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/login",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  })));
}