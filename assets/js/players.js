import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showControls,
} from "./paint";

// 유저 정보 최신화(현재 접속자, 점수)
const board = document.getElementById("jsPlayerBoard");
const notifs = document.getElementById("jsNotifs");

const setNotifs = (text) => (notifs.innerText = `${text}`);

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.score}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  // canvas 이벤트 종료(출제자만 그리게 하기)
  // canvas 컨트롤 숨기거나 사용 못하게
  setNotifs("");
  disableCanvas();
  hideControls();
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  setNotifs("");
  notifs.innerText = `문제 출제자 입니다! 문제: ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("게임이 종료되었습니다.");
  enableChat();
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => setNotifs("게임이 곧 시작됩니다.");
