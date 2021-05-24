import events from "./events";

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  // socket들은 이벤트를 발생 시킨다.
  // broadcast는 지금 접속한 사람 외에 다른 모든 클라이언트에게 메시지를 보낸다.
  // emit은 서버에서 클라이언트로 보내는 메시지, 신호
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });
};

export default socketController;
