export function Goal() {
  var goal = function goal(message) {
    alert(message);
  };

  //to pass an arg to a function, use arrow function when it comes to react.
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return goal("Goal Hit!!");
    }
  }, "Click me!"));
}