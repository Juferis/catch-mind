import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
  // 채팅 메시지를 화면에 출력해주는 함수
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="author ${nickname ? "another" : "self"}">${
    nickname ? nickname : "나"
  }:</span> ${text}
    `;
  messages.appendChild(li);
};

const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  // 채팅을 입력하면 sendMsg라는 함수가 socketController.js에서 실해된다.
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appendMsg(value);
};

export const handleNewMessage = ({ message, nickname }) =>
  appendMsg(message, nickname);

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

export const disableChat = () => (sendMsg.style.display = "none");
export const enableChat = () => (sendMsg.style.display = "flex");
