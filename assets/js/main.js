const body = document.querySelector("body");
const nickname = localStorage.getItem("nickname");

const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
}
