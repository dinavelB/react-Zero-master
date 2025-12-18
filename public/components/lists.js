function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function Lists() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    click = _useState2[0],
    setClicked = _useState2[1]; //it depends on what value you are returning.
  //im returning an array, so mustbe array.

  var button = function button() {
    var students = [{
      name: "Dinavel",
      course: "BSIT"
    }, {
      name: "Andrew",
      course: "BSIT"
    }, {
      name: "Jessa",
      course: "BSIT"
    }];

    //this adds a delay,
    //forEach Method is okay the for loops (on, in), because it can track index also.
    //for the delay
    students.forEach(function (student, index) {
      setTimeout(function () {
        setClicked(function (prev) {
          return [].concat(_toConsumableArray(prev), [student]);
        });
      }, index * 2000);
    });
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("h3", {
      children: "Studends"
    }), /*#__PURE__*/_jsx("button", {
      onClick: button,
      children: "See Students"
    }), /*#__PURE__*/_jsx("ul", {
      children: click.map(function (students, index) {
        return /*#__PURE__*/_jsxs("li", {
          children: ["student name:", students.name, ", student course:", students.course, " "]
        }, index);
      })
    })]
  });
}