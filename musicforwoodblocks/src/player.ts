import * as Tone from "tone";
import { woodblock } from "./graph";

export function start() {
  Tone.Transport.bpm.value = 240;

  new Tone.Loop((time) => {
    woodblock.triggerAttackRelease("C5", "0:1", time)
  }, "1m").start();

  Tone.Transport.start();
  Tone.start();
}

export function stop() {
    Tone.Transport.stop()
}
