import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const controls = document.getElementById("jsControls");
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
  } else if (!filling) {
    strokePath(offsetX, offsetY);
    getSocket().emit(window.events.strokePath, {
      offsetX,
      offsetY,
      color: ctx.strokeStyle,
    });
  }
};

const fill = (color) => {
  let currentColor = ctx.fillStyle;
  if (color !== undefined) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, DEFAULT_SIZE, DEFAULT_SIZE);
  ctx.fillStyle = currentColor;
};

const fillBackground = () => {
  if (filling) {
    fill();
    getSocket().emit(window.events.fill, { color: ctx.fillStyle });
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
export const handleFilled = ({ color }) => fill(color);

// 게임 시작 후 Canvas 사용 컨트롤
export const hideControls = () => (controls.style.opacity = 0);
export const showControls = () => (controls.style.opacity = 1);

export const disableCanvas = () => {
  canvas.removeEventListener("mousemove", handleMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", fillBackground);
};

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", fillBackground);
};

if (canvas) {
  enableCanvas();
  canvas.addEventListener("contextmenu", handleCM);
}
