import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);
// home에 events를 보내주는 이유는 프론트 엔드 부분에서 import가 동작하기 않기에 이벤트들을 같이 보내줘 사용 가능하도록 한다.

const handleListening = () => {
  console.log(`Server running http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server); // WS는 서버와 같은 포트를 사용 가능하다.

io.on("connection", (socket) => socketController(socket));
