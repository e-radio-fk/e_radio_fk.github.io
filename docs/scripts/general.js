(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* general scripts used everywhere */
var general = /*#__PURE__*/function () {
  function general() {
    _classCallCheck(this, general);
  }
  /*
  * takes the header element and adds an error banner
  */


  _createClass(general, [{
    key: "show_error",
    value: function show_error(error_message, error) {
      var node = document.createElement('div');
      node.innerHTML = '<div class="error">' + error_message + ' <span class="error-close-button" onclick="this.parentElement.style.display=\'none\';">&times;</span></div>';
      document.getElementsByTagName('header')[0].appendChild(node);
      console.log(error_message + ': ' + error);
    }
  }]);

  return general;
}();

exports["default"] = general;

},{}]},{},[1]);
