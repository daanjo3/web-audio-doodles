import * as Tone from "tone";
import { woodblock } from "./graph";

import scoreData from './parts.json';

export function makePart( partData:any ) {
  const part = new Tone.Part(((time, note) => {
    woodblock.triggerAttackRelease(note, "8n", time);
  }), partData.pattern );
  part.loop = partData.loop;
  part.start(partData.start);
}

export function start() {
  Tone.Transport.bpm.value = 108;
  Tone.Transport.timeSignature = 3 

  for(const partNumber in scoreData){
    makePart(scoreData[partNumber]);
  }

  Tone.Transport.start();
  Tone.start();
}

export function stop() {
    Tone.Transport.stop()
}
