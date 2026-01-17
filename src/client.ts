import {CanvasActionSet } from "./ActionSet.js";
import { Compiler, CompileStrategy, Stopper } from "./xLogo_Parser/compiler.js";

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

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const compiledContainer = document.getElementById('compiled_field') as HTMLTextAreaElement;
const sourceContainer = document.getElementById('source_field') as HTMLTextAreaElement;
const filename = document.getElementById('selectedfile') as HTMLParagraphElement;
const fileinput = document.getElementById('file_button') as HTMLInputElement;
const runButton = document.getElementById('render_button') as HTMLButtonElement;
const compileButton = document.getElementById('compile_button') as HTMLButtonElement;
const benchButton = document.getElementById('benchmark_button') as HTMLButtonElement;
const strategyDropDown = document.getElementById('strategy') as HTMLSelectElement;
const benchResult = document.getElementById('benchmark_result') as HTMLLabelElement;
const audio = document.getElementById('music') as HTMLAudioElement;
const runInput = document.getElementById('runInput') as HTMLInputElement;

const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("No 2D context");
const act = new CanvasActionSet(ctx);
const compiler = new Compiler(act);

let runningCode: Promise<boolean | void> | undefined = undefined;
let rendering = false;
let benchmarking = false;
let interrupted = false;
let stopper: Stopper = {runid: 0};
let current = 0;
let noRuns = 10;

runButton.addEventListener("click", () => {runCode()});
compileButton.addEventListener("click", () => {compileSource()});
benchButton.addEventListener("click", () => {runCode(true)});
fileinput.addEventListener("input", filenameChanged);
window.addEventListener('resize', size);
document.addEventListener('click', playAudioOnce);
audio.addEventListener('ended', nextSong);
runInput.addEventListener('input', noRunsChanged)

let strategy = "direct_access"
strategyDropDown.value = strategy;
strategyDropDown.addEventListener("change", () => {strategy = strategyDropDown.value;})

size();
audio.volume = 0;
audio.play();

async function runCode(doBenchmark: boolean = false) {
  if(rendering) {
    if(!doBenchmark) {
      stopper.runid++;
      interrupted = true;
      resetRendering();
    }

    return;
  }

  if(benchmarking) {
    if(doBenchmark) {
      stopper.runid++;
      interrupted = true;
      resetRendering();
    }

    return;
  }
  
  benchResult.innerHTML = "";
  stopper.runid++;

  if (runningCode) {
    await runningCode;
  }

  let runnable = compiler.runnableFromCode(compiledContainer.value);

  if (doBenchmark) {
    let compileTimes: number[] = [];
    let runTimes: number[] = [];

    benchResult.textContent = 'Running...';

    for (let i = 0; i < noRuns; i++) {
      compileTimes[i] = compileSource(true);
    }

    runnable = compiler.runnableFromCode(compiledContainer.value); // in case the compiler changed something in the code field, we should update it here

    for (let i = 0; i < noRuns; i++) {
      startBenchmarking();

      const runStart = performance.now();
      runningCode = runnable(stopper, stopper.runid).then(resetRendering);
      await runningCode;
      const runEnd = performance.now();

      if (interrupted) {
        benchResult.textContent = "interrupted";
        interrupted = false;
        return; // in case someone stops the benchmark
      }

      runTimes[i] = runEnd - runStart;
    }

    const avg = (array: number[]): number => array.reduce((sum: number, currVal: number) => sum + currVal, 0) / array.length;
    const std = (array: number[]): number => {
      let a = avg(array);
      return Math.sqrt(array.reduce((sum: number, currVal: number) => sum + (currVal - a) ** 2, 0)) / (array.length - 1);
    };
    // performance.now is at most microsecond precise, so it only makes sense to show the first 3 digits after the comma
    benchResult.innerHTML = `Average Compile Time: ${avg(compileTimes).toFixed(3)} ms, Standard Deviation: ${std(compileTimes).toFixed(3)} ms (over ${noRuns} runs) <br> Average Run time: ${(avg(runTimes)).toFixed(3)} ms, Standard Deviation ${std(runTimes).toFixed(3)} ms (over ${noRuns} runs)`
  } else {
    startRendering();
    runningCode = runnable(stopper, stopper.runid).then(resetRendering);
  }
}

function compileSource(benchmark:boolean=false): number | null{
  let compiledCode: string = "";
  let compileStart: number = 0;
  let compileEnd: number = 0;

  if(benchmark) {
    compileStart = performance.now();
    compiledCode = compiler.compileCode(sourceContainer.value, strategy as CompileStrategy);
    compileEnd = performance.now();
  } else {
    compiledCode = compiler.compileCode(sourceContainer.value, strategy as CompileStrategy);
  }

  compiledContainer.value = compiledCode;
  if(benchmark) {
    return compileEnd - compileStart;
  }

  return null;
}

function size() {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  const penColor = ctx.strokeStyle;
  const screenColor = canvas.style.backgroundColor;
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const wWidth = window.innerWidth;
  const wHeight = window.innerHeight;

  canvas.width = wWidth * 0.615;
  sourceContainer.style.width = wWidth * 0.3 + "px";
  compiledContainer.style.width = wWidth * 0.3 + "px";
  canvas.style.margin = `10px ${wWidth * 0.005}px 10px ${wWidth * 0.025}px`;
  sourceContainer.style.margin = `10px ${wWidth * 0.025}px 10px ${wWidth * 0.005}px`;
  compiledContainer.style.margin = `10px ${wWidth * 0.025}px 10px ${wWidth * 0.005}px`;

  canvas.height = wHeight * 0.8;
  sourceContainer.style.height = (wHeight * 0.8 / 2 - 20) + "px";
  compiledContainer.style.height = (wHeight * 0.8 / 2 - 20) + "px";

  ctx.putImageData(imageData, 0, 0);
  ctx.strokeStyle = penColor;
  canvas.style.backgroundColor = screenColor;
}

function filenameChanged(currentFilename: any) {
  filename.textContent = currentFilename;
}

fileinput?.addEventListener('change', () => {
  const file = fileinput.files?.[0];
  if (!file) return;
  filename.textContent = file.name;

  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = function({ target }) {

    if (typeof target.result !== "string") throw new Error("target.result is not string")
    sourceContainer.value = target.result;
    compileSource();
  }
  reader.onerror = function() {
    console.log('error reading file');
  }
});

function noRunsChanged() {
  let value = runInput.valueAsNumber

  if (typeof value === "number"){
    noRuns = value;
  }
}

function playAudioOnce() {
  audio.play();
  document.removeEventListener('click', playAudioOnce);
}

function nextSong() {
  /* if (current < 12) {
    current++;
  } else {
    current = 0;
  }

  audio.src = playlist[current];
  audio.play(); */
}

function startRendering() {
  act.cs();
  // benchButton.textContent = "Stop";
  runButton.textContent = "Stop";
  rendering = true;
}

function startBenchmarking() {
  act.cs();
  benchButton.textContent = "Stop"
  benchmarking = true;
}

function resetRendering() {
  benchButton.textContent = "Benchmark";
  runButton.textContent = "Run Code";
  rendering = false;
  benchmarking = false;
}