import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const modeBtn = document.getElementById("jsMode");
const ctx = canvas.getContext("2d");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

const DEFAULT_COLOR = "#2c2c2c";

let painting = false;
let filling = false;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 700);
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

const stopPainting = () => (painting = false);
const startPainting = () => (painting = true);

const handleMouseMove = (event) => {
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    // path를 지정하면 서버로 값을 전해준다
    getSocket();
  } else {
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  }
};

const fillBackground = () => {
  if (filling) {
    ctx.fillRect(0, 0, 700, 700);
  }
};

const changeColor = (event) => {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

const changeMode = () => {
  if (filling === true) {
    filling = false;
    modeBtn.innerText = "채우기";
  } else {
    filling = true;
    modeBtn.innerText = "그리기";
  }
};

const handleCM = (event) => {
  event.preventDefault();
};

if (canvas) {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", fillBackground);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", changeColor)
);

if (modeBtn) {
  modeBtn.addEventListener("click", changeMode);
}
