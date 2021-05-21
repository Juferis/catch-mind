const socketController = (socket) => {
  // socket들은 이벤트를 발생 시킨다.
  // broadcast는 지금 접속한 사람 외에 다른 모든 클라이언트에게 메시지를 보낸다.
  // emit은 서버에서 클라이언트로 보내는 메시지, 신호
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anonymous",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
};

export default socketController;
