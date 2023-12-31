import * as Tone from "tone";
import { leftSynth, rightSynth } from "./graph";

export function start() {
  Tone.Transport.bpm.value = 240;

  new Tone.Loop((time) => {
    // Trigger C5, and hold for a full note (measure) + two 1/4 notes
    leftSynth.triggerAttackRelease("C5", "1:2", time);
    // Switch note to D5 after two 1/4 notes without retriggering
    leftSynth.setNote("D5", "+0:2");
    // Trigger E4 after 6 measures and hold for two 1/4 notes.
    leftSynth.triggerAttackRelease("E4", "0:2", "+6:0");

    // Trigger G4 after 11 measures + a two 1/4 notes, and hold for two 1/4 notes.
    leftSynth.triggerAttackRelease("G4", "0:2", "+11:2");

    // Trigger E5 after 19 measures and hold for 2 measures.
    // Switch to G5, A5, G5 after delay of a 1/4 note + two 1/16 notes each.
    leftSynth.triggerAttackRelease("E5", "2:0", "+19:0");
    leftSynth.setNote("G5", "+19:1:2");
    leftSynth.setNote("A5", "+19:3:0");
    leftSynth.setNote("G5", "+19:4:2");
  }, "34m").start();

  new Tone.Loop((_) => {
    // Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
    rightSynth.triggerAttackRelease("D4", "1:2", "+5:0");
    // Switch to E4 after one more measure
    rightSynth.setNote("E4", "+6:0");

    // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
    rightSynth.triggerAttackRelease("B3", "1m", "+11:2:2");
    // Switch to G3 after a 1/2 note more
    rightSynth.setNote("G3", "+12:0:2");

    // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
    rightSynth.triggerAttackRelease("G4", "0:2", "+23:2");
  }, "37m").start();

  Tone.Transport.start();
  Tone.start();
}

export function stop() {
    Tone.Transport.stop()
}
