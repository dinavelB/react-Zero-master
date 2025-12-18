import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export function Goal() {
  var goal = function goal(message) {
    alert(message);
  };

  //to pass an arg to a function, use arrow function when it comes to react.
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("button", {
      onClick: function onClick() {
        return goal("Goal Hit!!");
      },
      children: "Click me!"
    })
  });
}