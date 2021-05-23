import { initSockets } from "./sockets";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = (nickname) => {
  // eslint-disable-next-line no-undef
  const socket = io("/"); // socket를 연결한다.
  socket.emit(window.events.setNickname, { nickname }); // setNickname함수는 socketContrller.js에 있다.
  initSockets(socket); // 로그인하면 소켓을 실행시킨다.
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleSubmitNickname = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleSubmitNickname);
}
