import {
  registerPlayerListener,
  start as startPlayer,
  stop as stopPlayer,
} from "./player";

const contraints = { audio: true };
let hasAudioPermission = false;

navigator.mediaDevices
  .getUserMedia(contraints)
  .then(() => (hasAudioPermission = true));

function start() {
  if (hasAudioPermission) {
    console.log("Starting music");
    startPlayer();
  } else {
    alert("We have no audio permission");
  }
}

function stop() {
  console.log("Stopping music");
  setPlayerText("stopping");
  stopPlayer();
}

function setPlayerText(state: "start" | "stopping" | "stopped") {
  const textElem = document.querySelector<HTMLElement>("#text-playerstate")!;
  switch (state) {
    case "start":
      textElem.innerText = "Running";
      break;
    case "stopping":
      textElem.innerText = "Stopping after this loop";
      break;
    case "stopped":
      textElem.innerText = "Stopped";
  }
}

// Register Tone.Transport listeners to update the UI
registerPlayerListener("start", () => setPlayerText("start"));
registerPlayerListener("stop", () => setPlayerText("stopped"));

// Register onclick handlers to control the player
document
  .querySelector<HTMLButtonElement>("#btn-start")
  ?.addEventListener("click", start);
document
  .querySelector<HTMLButtonElement>("#btn-stop")
  ?.addEventListener("click", stop);
