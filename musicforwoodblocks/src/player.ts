import * as Tone from "tone";
import { woodblock } from "./graph";

import scoreData from "./parts/data.json";
import type { Part } from "./parts";

export function makePart(partData: Part) {
  const part = new Tone.Part((time, note) => {
    woodblock.triggerAttackRelease(note, "8n", time);
  }, partData.pattern);
  part.loop = partData.loop;
  part.start(partData.start);
}

export function start() {
  Tone.Transport.bpm.value = 108;
  Tone.Transport.timeSignature = 3;

  // Register each part of the score
  scoreData.forEach(makePart);

  Tone.Transport.start();
  Tone.start();
}

export function stop() {
  Tone.Transport.stop();
}

// Register a Tone Transport event listener
export function registerPlayerListener(eventName: 'start' | 'stop', callback: () => void) {
  Tone.Transport.on(eventName, callback)
}
