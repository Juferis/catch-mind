import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const modeBtn = document.getElementById("jsMode");
const ctx = canvas.getContext("2d");

const DEFAULT_COLOR = "#2c2c2c";
const DEFAULT_SIZE = 700;

canvas.width = DEFAULT_SIZE;
canvas.height = DEFAULT_SIZE;

let painting = false;
let filling = false;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, DEFAULT_SIZE, DEFAULT_SIZE);
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

const stopPainting = () => (painting = false);
const startPainting = () => (painting = true);

const beginPath = (offsetX, offsetY) => {
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
};

const strokePath = (offsetX, offsetY, color) => {
  let currentColor = ctx.strokeStyle; // 현재 정해져 있는 색상
  console.log(color);
  if (color !== undefined) {
    // 색상 데이터가 넘어 왔다면 색상 변경
    ctx.strokeStyle = color;
  }
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
  ctx.strokeStyle = currentColor; // 현재 정해져 있는 색상 최신화
};

const handleMouseMove = (event) => {
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;
  if (!painting) {
    beginPath(offsetX, offsetY);
    getSocket().emit(window.events.beginPath, { offsetX, offsetY });
  } else {
    strokePath(offsetX, offsetY);
    getSocket().emit(window.events.strokePath, {
      offsetX,
      offsetY,
      color: ctx.strokeStyle,
    });
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

export const handleBeganPath = ({ offsetX, offsetY }) =>
  beginPath(offsetX, offsetY);
export const handleStrokedPath = ({ offsetX, offsetY, color }) =>
  strokePath(offsetX, offsetY, color);
