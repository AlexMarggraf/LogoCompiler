import {CanvasActionSet, LogActionSet} from "./ActionSet.js";
import { compileCode, runnableFromCode } from "./xLogo_Parser/compiler.js";
const playlist = [
  "music/game4.mp3",
  "music/game5.mp3",
  "music/game6.mp3",
  "music/game7.mp3",
  "music/game8.mp3",
  "music/game9.mp3",
  "music/game10.mp3",
  "music/game11.mp3",
  "music/game12.mp3",
  "music/game13.mp3",
  "music/game.mp3",
  "music/game2.mp3",
  "music/game3.mp3"
];

let current = 0;

const audio = document.getElementById('music') as HTMLAudioElement;
audio.volume = 0;
audio.play();

function playAudioOnce() {
  audio.play();
  document.removeEventListener('click', playAudioOnce);
}

function nextSong() {
  if (current < 12) {
    current++;
  } else {
    current = 0;
  }

  audio.src = playlist[current];
  audio.play();
}

document.addEventListener('click', playAudioOnce);
audio.addEventListener('ended', nextSong);



const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const compiledContainer = document.getElementById('compiled_field') as HTMLTextAreaElement;
const sourceContainer = document.getElementById('source_field') as HTMLTextAreaElement;
const filename = document.getElementById('selectedfile') as HTMLParagraphElement;
const fileinput = document.getElementById('file_button') as HTMLInputElement;
const runButton = document.getElementById('render_button') as HTMLButtonElement;
const compileButton = document.getElementById('compile_button') as HTMLButtonElement;
fileinput.addEventListener("input", filenameChanged);
window.addEventListener('resize', size);
size();
const ctx = canvas.getContext("2d");
const act = new CanvasActionSet(ctx);
let runningCode: Promise<void> | undefined = undefined;
act.runid = 0;
if (!ctx) throw new Error("No 2D context");
runButton.addEventListener("click", runCode);
compileButton.addEventListener("click", compileSource);

function filenameChanged(currentFilename: any) {
  console.log("from filenameChanged:", currentFilename.target.value);
  filename.textContent = currentFilename;
}

fileinput?.addEventListener('change', () => {
  const file = fileinput.files?.[0];
  if (!file) return;
  filename.textContent = file.name;

  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = function({ target }) {

    console.log(target.result);
    if (typeof target.result !== "string") throw new Error("target.result is not string")
    sourceContainer.value = target.result;
    compileSource();
  }
  reader.onerror = function() {
    console.log('error reading file');
  }
});

function compileSource() {
  compiledContainer.value = compileCode(sourceContainer.value);
}

function size() {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  const penColor = ctx.strokeStyle;
  const screenColor = canvas.style.backgroundColor;
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  canvas.width = window.innerWidth * 0.6;
  sourceContainer.style.width = window.innerWidth * 0.3 + "px";
  compiledContainer.style.width = window.innerWidth * 0.3 + "px";

  const canvasHeight = window.innerHeight * 0.8;
  canvas.height = canvasHeight;
  sourceContainer.style.height = (canvasHeight / 2 - 25) + "px";
  compiledContainer.style.height = (canvasHeight / 2 - 25) + "px";

  ctx.putImageData(imageData, 0, 0);
  ctx.strokeStyle = penColor;
  canvas.style.backgroundColor = screenColor;
}

async function runCode() {
  let script = compiledContainer.value;
  act.runid++
  if (runningCode) {
    console.log("awaiting promise with runid:", act.runid - 1);
    console.log(runningCode);
    await runningCode;
  }
  console.log("starting new promise with runid:", act.runid);
  runningCode = (runnableFromCode(script)(act, act.runid));
}

