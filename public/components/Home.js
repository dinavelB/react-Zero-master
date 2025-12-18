import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Home() {
  var navigate = useNavigate(); //function that handles the navigation thru path. thru broswer router

  var handleChange = function handleChange(event) {
    var value = event.target.value;
    navigate('/' + value.toLowerCase()); //comvert to small case because in the path of routes.
  };
  return /*#__PURE__*/_jsxs("select", {
    onChange: handleChange,
    children: [/*#__PURE__*/_jsx("option", {
      value: "Contact",
      children: "Contact"
    }), /*#__PURE__*/_jsx("option", {
      value: "Login",
      children: "Login"
    })]
  });
}