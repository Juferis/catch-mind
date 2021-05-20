const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const nickname = localStorage.getItem(NICKNAME);

const handleSubmitNickname = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  console.log(value);
  input.value = "";
  localStorage.setItem = { NICKNAME, value };
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
}

if (loginForm) {
  loginForm.addEventListener("submit", handleSubmitNickname);
}
