import path from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const __dirname = path.resolve();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.static(path.join(__dirname, "./src/static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`Server running http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server); // WS는 서버와 같은 포트를 사용 가능하다.
