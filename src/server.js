import path from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const __dirname = path.resolve();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./src/views"));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "./src/static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`Server running http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server); // WS는 서버와 같은 포트를 사용 가능하다.

io.on("connection", (socket) => {
  // socket들은 이벤트를 발생 시킨다.
  // broadcast는 지금 접속한 사람 외에 다른 모든 클라이언트에게 메시지를 보낸다.
  // emit은 서버에서 클라이언트로 보내는 메시지, 신호
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
