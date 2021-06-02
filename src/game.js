import { chooseWords } from "./word";
import events from "./events";
import socketController from "./socketController";
let inProgress = false;
let word = null;

const chooseLeader = (sockets) => {
  return sockets[Math.floor(Math.random() * sockets.length)];
};
export const startGame = (sockets, io) => {
  if (inProgress === false) {
    inProgress = true;
    const leader = chooseLeader(sockets);
    word = chooseWords();
    // 문제 출제자에게 알림
    io.to(leader.id).emit(events.leaderNotif, { word });
    setTimeout(() => socketController.superBroadcast(events.gameStarted), 2000);
  }
};

export const endGame = () => (inProgress = false);
