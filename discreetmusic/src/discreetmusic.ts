import { start as startPlayer, stop as stopPlayer } from './player'

const contraints = { audio: true }
let hasAudioPermission = false

navigator.mediaDevices.getUserMedia(contraints).then(() => hasAudioPermission = true)

function start() {
  if (hasAudioPermission) {
    console.log("Starting music");
    startPlayer();
    document.querySelector<HTMLElement>('#text-playerstate')!.innerText = 'Running'
  } else {
    alert('We have no audio permission')
  }
}

function stop() {
  console.log("Stopping music");
  document.querySelector<HTMLElement>('#text-playerstate')!.innerText = 'Stopping (after one loop)'
  stopPlayer()
}

document.querySelector<HTMLButtonElement>('#btn-start')?.addEventListener('click', start)
document.querySelector<HTMLButtonElement>('#btn-stop')?.addEventListener('click', stop)