import { chooseWords } from "./word";

let inProgress = false;
let word = null;

const chooseLeader = (sockets) => {
  sockets[Math.floor(Math.random() * sockets.length)];
};

export const startGame = (sockets) => {
  if (inProgress === false) {
    inProgress = true;
    const leader = chooseLeader(sockets);
    word = chooseWords();
  }
};
