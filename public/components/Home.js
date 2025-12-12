import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Home() {
  var navigate = useNavigate(); //function that handles the navigation thru path. thru broswer router

  var handleChange = function handleChange(event) {
    var value = event.target.value;
    navigate('/' + value.toLowerCase()); //comvert to small case because in the path of routes.
  };
  return /*#__PURE__*/React.createElement("select", {
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    value: "Contact"
  }, "Contact"), /*#__PURE__*/React.createElement("option", {
    value: "Login"
  }, "Login"));
}