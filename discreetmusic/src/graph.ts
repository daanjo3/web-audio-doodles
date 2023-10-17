import * as Tone from 'tone'
import { makeSynth } from "./synth"

const leftSynth = makeSynth()
const rightSynth = makeSynth()

const leftPanner = new Tone.Panner(-1).toDestination()
const rightPanner = new Tone.Panner(1).toDestination()

const echo = new Tone.FeedbackDelay('16n', 0.2)
const delay = Tone.context.createDelay(6.0); // Borrow the AudioContext from Tone.js
delay.delayTime.value = 6.0;
const delayFade = Tone.context.createGain();
delayFade.gain.value = 0.75;

// synths -> panner
leftSynth.connect(leftPanner)
rightSynth.connect(rightPanner)
// panner -> echo
leftPanner.connect(echo)
rightPanner.connect(echo)
// echo -> master
echo.toDestination()
echo.connect(delay);
// delayed player feeds into destination and itself
delay.connect(delay.context.destination)
delay.connect(delayFade);
delayFade.connect(delay);

export {
    leftSynth,
    rightSynth,
}