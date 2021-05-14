import path from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 5000;
const __dirname = path.resolve();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.static(path.join(__dirname, "./src/static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`Server running http://localhost:${PORT}`);
};

console.log("Hello!!");
app.listen(PORT, handleListening);
