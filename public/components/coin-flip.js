function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function Head() {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("p", {
      children: "Your Coin landed at Head."
    })
  });
}
function Tails() {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("p", {
      children: "Your Coin landed at Tails."
    })
  });
}
export function MainCoin() {
  //to track the users clicked.
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentRes = _useState2[0],
    setResult = _useState2[1];
  var result = function result() {
    var randomNum = Math.floor(Math.random() * 2);
    //call currentRes to render this
    randomNum === 0 ? setResult(/*#__PURE__*/_jsx(Head, {})) : setResult(/*#__PURE__*/_jsx(Tails, {}));
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("p", {
      children: "Flip your Coin."
    }), /*#__PURE__*/_jsx("button", {
      onClick: result,
      children: "Flip"
    }), currentRes]
  });
}