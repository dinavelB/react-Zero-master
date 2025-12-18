import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function Home() {
  var nav = useNavigate();
  var gotBackLogin = function gotBackLogin() {
    nav("/home");
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("button", {
      onClick: gotBackLogin,
      children: "Back"
    }), /*#__PURE__*/_jsxs("h1", {
      children: ["Welcome to the Homepage, finally u figured it ", /*#__PURE__*/_jsx("output", {}), "!"]
    })]
  });
}