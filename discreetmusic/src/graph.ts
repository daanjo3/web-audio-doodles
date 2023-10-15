import * as Tone from 'tone'
import { makeSynth } from "./synth"

const leftSynth = makeSynth()
const rightSynth = makeSynth()

const leftPanner = new Tone.Panner(-1).toDestination()
const rightPanner = new Tone.Panner(1).toDestination()

const echo = new Tone.FeedbackDelay('16n', 0.2)

// synths -> panner
leftSynth.connect(leftPanner)
rightSynth.connect(rightPanner)
// panner -> echo
leftPanner.connect(echo)
rightPanner.connect(echo)
// echo -> master
echo.toDestination()

export {
    leftSynth,
    rightSynth,
}