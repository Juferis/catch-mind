import { disableCanvas, hideControls } from "./paint";

// 유저 정보 최신화(현재 접속자, 점수)
const board = document.getElementById("jsPlayerBoard");

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
  disableCanvas();
  hideControls();
};
export const handleLeaderNotif = () => console.log("U r leader");
