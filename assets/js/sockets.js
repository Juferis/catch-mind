import { handleNewUser } from "./notifications";

let socket = null; // 처음 로드할 때 null값
// login.js에서 initSockets(socket)에서 소켓 받아오기

export const getSocket = () => socket; // 소켓에 연결 하고 싶을 때 사용

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket); // 소켓 전달
  aSocket.on(events.newUser, handleNewUser);
};
