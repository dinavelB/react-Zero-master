import { useNavigate } from "react-router-dom";
export function Home() {
  var nav = useNavigate();
  var gotBackLogin = function gotBackLogin() {
    nav('/');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: gotBackLogin
  }, "Back"), /*#__PURE__*/React.createElement("h1", null, "Welcome to the Homepage, finally u figured it out!"));
}