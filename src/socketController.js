import events from "./events";

let sockets = [];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  // broadcast는 지금 접속한 사람 외에 다른 모든 클라이언트에게 메시지를 보낸다.
  // emit은 서버에서 클라이언트로 보내는 메시지, 신호
  const superBroadcast = (event, data) => io.emit(event, data);
  // socket들은 이벤트를 발생 시킨다.
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, score: 0, nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
  });
  socket.on(events.disconnect, () => {
    // 연결을 끊은 유저를 제외한 다른 유저들을 찾는다
    sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });
  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });
  socket.on(events.beginPath, ({ offsetX, offsetY }) => {
    broadcast(events.beganPath, { offsetX, offsetY });
  });
  socket.on(events.strokePath, ({ offsetX, offsetY, color }) => {
    broadcast(events.strokedPath, { offsetX, offsetY, color });
  });
  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, { color });
  });
};

export default socketController;
