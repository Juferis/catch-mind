(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  console.log(input.value);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
}

if (loginForm) {
  loginForm.addEventListener("submit", handleSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZGE1NWE5OTMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBakI7QUFFQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdWLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0FZLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLEtBQWxCO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJWCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJMLEVBQUFBLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUJULFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xSLEVBQUFBLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUJSLFNBQWpCO0FBQ0Q7O0FBRUQsSUFBSU4sU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ2UsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLFlBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpO1xyXG5cclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKTtcclxufTtcclxuXHJcbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcclxufSBlbHNlIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxufVxyXG5cclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XHJcbn1cclxuIl19
},{}]},{},[1])