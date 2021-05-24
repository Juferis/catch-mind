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
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
