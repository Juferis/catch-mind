(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  // 채팅 메시지를 화면에 출력해주는 함수
  var li = document.createElement("li");
  li.innerHTML = "\n    <span class=\"author ".concat(nickname ? "another" : "self", "\">").concat(nickname ? nickname : "나", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value; // 채팅을 입력하면 sendMsg라는 함수가 socketController.js에서 실해된다.

  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQztBQUNBLE1BQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILHdDQUN3QkgsUUFBUSxHQUFHLFNBQUgsR0FBZSxNQUQvQyxnQkFFRUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsR0FGeEIsc0JBR1lELElBSFo7QUFLQUwsRUFBQUEsUUFBUSxDQUFDVSxXQUFULENBQXFCSCxFQUFyQjtBQUNELENBVEQ7O0FBV0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDL0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFDQSxNQUFRQyxLQUFSLEdBQWtCRixLQUFsQixDQUFRRSxLQUFSLENBSCtCLENBSS9COztBQUNBLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVpQixJQUFBQSxPQUFPLEVBQUVKO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNELENBUkQ7O0FBVU8sSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdELE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlkLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQzlCRixTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FEcUI7QUFBQSxDQUF6Qjs7OztBQUdQLElBQUlILE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNtQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1gsYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xyXG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XHJcblxyXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcclxuICAvLyDssYTtjIUg66mU7Iuc7KeA66W8IO2ZlOuptOyXkCDstpzroKXtlbTso7zripQg7ZWo7IiYXHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwiYW5vdGhlclwiIDogXCJzZWxmXCJ9XCI+JHtcclxuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIuuCmFwiXHJcbiAgfTo8L3NwYW4+ICR7dGV4dH1cclxuICAgIGA7XHJcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICAvLyDssYTtjIXsnYQg7J6F66Cl7ZWY66m0IHNlbmRNc2frnbzripQg7ZWo7IiY6rCAIHNvY2tldENvbnRyb2xsZXIuanPsl5DshJwg7Iuk7ZW065Cc64ukLlxyXG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxyXG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XHJcblxyXG5pZiAoc2VuZE1zZykge1xyXG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcclxufVxyXG4iXX0=
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjc2MzMyNTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgXCIuL3BhaW50XCI7XHJcbiJdfQ==
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/"); // socket를 연결한다.

  socket.emit(window.events.setNickname, {
    nickname: nickname
  }); // setNickname함수는 socketContrller.js에 있다.

  (0, _sockets.initSockets)(socket); // 로그인하면 소켓을 실행시킨다.
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleSubmitNickname = function handleSubmitNickname(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleSubmitNickname);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVTdWJtaXROaWNrbmFtZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLFFBQXJCLENBQWpCOztBQUVBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNILFFBQUQsRUFBYztBQUMxQjtBQUNBLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakIsQ0FGMEIsQ0FFRjs7QUFDeEJELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDLEVBSDBCLENBRzRCOztBQUN0RCw0QkFBWUksTUFBWixFQUowQixDQUlMO0FBQ3RCLENBTEQ7O0FBT0EsSUFBSUosUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMTixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1XLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RDQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQVFxQixLQUFSLEdBQWtCRCxLQUFsQixDQUFRQyxLQUFSO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCbkIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLG9CQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcclxuXHJcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTsgLy8gc29ja2V066W8IOyXsOqysO2VnOuLpC5cclxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pOyAvLyBzZXROaWNrbmFtZe2VqOyImOuKlCBzb2NrZXRDb250cmxsZXIuanPsl5Ag7J6I64ukLlxyXG4gIGluaXRTb2NrZXRzKHNvY2tldCk7IC8vIOuhnOq3uOyduO2VmOuptCDshozsvJPsnYQg7Iuk7ZaJ7Iuc7YKo64ukLlxyXG59O1xyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gIGxvZ0luKG5pY2tuYW1lKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlU3VibWl0Tmlja25hbWUgPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICBsb2dJbih2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0Tmlja25hbWUpO1xyXG59XHJcbiJdfQ==
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var alertNotification = function alertNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  alertNotification("".concat(nickname, "\uB2D8\uC774 \uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  alertNotification("".concat(nickname, "\uB2D8\uC774 \uB098\uAC00\uC168\uC2B5\uB2C8\uB2E4!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFsZXJ0Tm90aWZpY2F0aW9uIiwidGV4dCIsImNvbG9yIiwibm90aWZpY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVOZXdVc2VyIiwibmlja25hbWUiLCJoYW5kbGVEaXNjb25uZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekMsTUFBTUMsWUFBWSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCSixJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTCxLQUFyQztBQUNBQyxFQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsY0FBekI7QUFDQVgsRUFBQUEsSUFBSSxDQUFDWSxXQUFMLENBQWlCTixZQUFqQjtBQUNELENBTkQ7O0FBUU8sSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3Q1gsRUFBQUEsaUJBQWlCLFdBQUlXLFFBQUoseURBQTBCLGtCQUExQixDQUFqQjtBQUNELENBRk07Ozs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFFBQWtCO0FBQUEsTUFBZkQsUUFBZSxTQUFmQSxRQUFlO0FBQ2xEWCxFQUFBQSxpQkFBaUIsV0FBSVcsUUFBSix5REFBMEIsa0JBQTFCLENBQWpCO0FBQ0QsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmNvbnN0IGFsZXJ0Tm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XHJcbiAgYWxlcnROb3RpZmljYXRpb24oYCR7bmlja25hbWV964uY7J20IOuTpOyWtOyZlOyKteuLiOuLpCFgLCBcInJnYigwLCAxMjIsIDI1NSlcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gIGFsZXJ0Tm90aWZpY2F0aW9uKGAke25pY2tuYW1lfeuLmOydtCDrgpjqsIDshajsirXri4jri6QhYCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xyXG59O1xyXG4iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var colors = document.getElementsByClassName("jsColor");
var modeBtn = document.getElementById("jsMode");
var ctx = canvas.getContext("2d");
var DEFAULT_COLOR = "#2c2c2c";
var DEFAULT_SIZE = 700;
canvas.width = DEFAULT_SIZE;
canvas.height = DEFAULT_SIZE;
var painting = false;
var filling = false;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, DEFAULT_SIZE, DEFAULT_SIZE);
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

var stopPainting = function stopPainting() {
  return painting = false;
};

var startPainting = function startPainting() {
  return painting = true;
};

var beginPath = function beginPath(offsetX, offsetY) {
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
};

var strokePath = function strokePath(offsetX, offsetY) {
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
};

var handleMouseMove = function handleMouseMove(event) {
  var offsetX = event.offsetX;
  var offsetY = event.offsetY;

  if (!painting) {
    beginPath(offsetX, offsetY);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      offsetX: offsetX,
      offsetY: offsetY
    });
  } else {
    strokePath(offsetX, offsetY);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      offsetX: offsetX,
      offsetY: offsetY
    });
  }
};

var fillBackground = function fillBackground() {
  if (filling) {
    ctx.fillRect(0, 0, 700, 700);
  }
};

var changeColor = function changeColor(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var changeMode = function changeMode() {
  if (filling === true) {
    filling = false;
    modeBtn.innerText = "채우기";
  } else {
    filling = true;
    modeBtn.innerText = "그리기";
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

if (canvas) {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", fillBackground);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", changeColor);
});

if (modeBtn) {
  modeBtn.addEventListener("click", changeMode);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  return beginPath(offsetX, offsetY);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
  return strokePath(offsetX, offsetY);
};

exports.handleStrokedPath = handleStrokedPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kZUJ0biIsImN0eCIsImdldENvbnRleHQiLCJERUZBVUxUX0NPTE9SIiwiREVGQVVMVF9TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJwYWludGluZyIsImZpbGxpbmciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3RvcFBhaW50aW5nIiwic3RhcnRQYWludGluZyIsImJlZ2luUGF0aCIsIm9mZnNldFgiLCJvZmZzZXRZIiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImxpbmVUbyIsInN0cm9rZSIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImZpbGxCYWNrZ3JvdW5kIiwiY2hhbmdlQ29sb3IiLCJjb2xvciIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlTW9kZSIsImlubmVyVGV4dCIsImhhbmRsZUNNIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImhhbmRsZUJlZ2FuUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsT0FBTyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7QUFDQSxJQUFNSSxHQUFHLEdBQUdOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQXRC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QkYsU0FBUyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsQ0FEb0I7QUFBQSxDQUF4Qjs7OztBQUVBLElBQU15QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBRzFCLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlDLE9BQVosU0FBWUEsT0FBWjtBQUFBLFNBQy9CRSxVQUFVLENBQUNILE9BQUQsRUFBVUMsT0FBVixDQURxQjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcclxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XHJcbmNvbnN0IG1vZGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSBcIiMyYzJjMmNcIjtcclxuY29uc3QgREVGQVVMVF9TSVpFID0gNzAwO1xyXG5cclxuY2FudmFzLndpZHRoID0gREVGQVVMVF9TSVpFO1xyXG5jYW52YXMuaGVpZ2h0ID0gREVGQVVMVF9TSVpFO1xyXG5cclxubGV0IHBhaW50aW5nID0gZmFsc2U7XHJcbmxldCBmaWxsaW5nID0gZmFsc2U7XHJcblxyXG5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG5jdHguZmlsbFJlY3QoMCwgMCwgREVGQVVMVF9TSVpFLCBERUZBVUxUX1NJWkUpO1xyXG5jdHguc3Ryb2tlU3R5bGUgPSBERUZBVUxUX0NPTE9SO1xyXG5jdHguZmlsbFN0eWxlID0gREVGQVVMVF9DT0xPUjtcclxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcclxuXHJcbmNvbnN0IHN0b3BQYWludGluZyA9ICgpID0+IChwYWludGluZyA9IGZhbHNlKTtcclxuY29uc3Qgc3RhcnRQYWludGluZyA9ICgpID0+IChwYWludGluZyA9IHRydWUpO1xyXG5cclxuY29uc3QgYmVnaW5QYXRoID0gKG9mZnNldFgsIG9mZnNldFkpID0+IHtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhvZmZzZXRYLCBvZmZzZXRZKTtcclxufTtcclxuXHJcbmNvbnN0IHN0cm9rZVBhdGggPSAob2Zmc2V0WCwgb2Zmc2V0WSkgPT4ge1xyXG4gIGN0eC5saW5lVG8ob2Zmc2V0WCwgb2Zmc2V0WSk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3Qgb2Zmc2V0WCA9IGV2ZW50Lm9mZnNldFg7XHJcbiAgY29uc3Qgb2Zmc2V0WSA9IGV2ZW50Lm9mZnNldFk7XHJcbiAgaWYgKCFwYWludGluZykge1xyXG4gICAgYmVnaW5QYXRoKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyBvZmZzZXRYLCBvZmZzZXRZIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdHJva2VQYXRoKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmaWxsQmFja2dyb3VuZCA9ICgpID0+IHtcclxuICBpZiAoZmlsbGluZykge1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDcwMCwgNzAwKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VDb2xvciA9IChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VNb2RlID0gKCkgPT4ge1xyXG4gIGlmIChmaWxsaW5nID09PSB0cnVlKSB7XHJcbiAgICBmaWxsaW5nID0gZmFsc2U7XHJcbiAgICBtb2RlQnRuLmlubmVyVGV4dCA9IFwi7LGE7Jqw6riwXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbGxpbmcgPSB0cnVlO1xyXG4gICAgbW9kZUJ0bi5pbm5lclRleHQgPSBcIuq3uOumrOq4sFwiO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUNNID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufTtcclxuXHJcbmlmIChjYW52YXMpIHtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbEJhY2tncm91bmQpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xyXG59XHJcblxyXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaCgoY29sb3IpID0+XHJcbiAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbG9yKVxyXG4pO1xyXG5cclxuaWYgKG1vZGVCdG4pIHtcclxuICBtb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VNb2RlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IG9mZnNldFgsIG9mZnNldFkgfSkgPT5cclxuICBiZWdpblBhdGgob2Zmc2V0WCwgb2Zmc2V0WSk7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IG9mZnNldFgsIG9mZnNldFkgfSkgPT5cclxuICBzdHJva2VQYXRoKG9mZnNldFgsIG9mZnNldFkpO1xyXG4iXX0=
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var socket = null; // 처음 로드할 때 null값
// login.js에서 initSockets(socket)에서 소켓 받아오기

var getSocket = function getSocket() {
  return socket;
}; // 소켓에 연결 하고 싶을 때 사용


exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket); // 소켓 전달

  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
  aSocket.on(events.beganPath, _paint.handleBeganPath);
  aSocket.on(events.strokedPath, _paint.handleStrokedPath);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWIsQyxDQUFtQjtBQUNuQjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQixDLENBQWdDOzs7OztBQUVoQyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFEO0FBQUEsU0FBY0gsTUFBTSxHQUFHRyxPQUF2QjtBQUFBLENBQXJCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQ3RDLGdCQUFtQkUsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVosQ0FGc0MsQ0FFZjs7QUFDdkJBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDQU4sRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0ksWUFBbEIsRUFBZ0NDLGlDQUFoQztBQUNBUixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDTSxNQUFsQixFQUEwQkMsc0JBQTFCO0FBQ0FWLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNRLFNBQWxCLEVBQTZCQyxzQkFBN0I7QUFDQVosRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ1UsV0FBbEIsRUFBK0JDLHdCQUEvQjtBQUNELENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgeyBoYW5kbGVEaXNjb25uZWN0ZWQsIGhhbmRsZU5ld1VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGhhbmRsZUJlZ2FuUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGggfSBmcm9tIFwiLi9wYWludFwiO1xyXG5cclxubGV0IHNvY2tldCA9IG51bGw7IC8vIOyymOydjCDroZzrk5ztlaAg65WMIG51bGzqsJJcclxuLy8gbG9naW4uanPsl5DshJwgaW5pdFNvY2tldHMoc29ja2V0KeyXkOyEnCDshozsvJMg67Cb7JWE7Jik6riwXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0OyAvLyDshozsvJPsl5Ag7Jew6rKwIO2VmOqzoCDsi7bsnYQg65WMIOyCrOyaqVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xyXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpOyAvLyDshozsvJMg7KCE64usXHJcbiAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbiAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TWVzc2FnZSk7XHJcbiAgYVNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XHJcbn07XHJcbiJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])