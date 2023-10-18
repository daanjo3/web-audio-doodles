import * as Tone from "tone";

export interface Part {
  instrument: string;
  partnumber: number;
  loop: number;
  start: Tone.Unit.Time;
  pattern: string[][];
}
