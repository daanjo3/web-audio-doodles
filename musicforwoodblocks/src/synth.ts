import * as Tone from 'tone'

const envelope: Partial<Tone.EnvelopeOptions> = {
  attack: 0.2,
  release: 4,
  releaseCurve: "linear",
};

const filterEnvelope = {
  baseFrequency: 200,
  octaves: 2,
  attack: 0,
  decay: 0,
  release: 1000,
};

export function makeSynth() {
  return new Tone.DuoSynth({
    harmonicity: 1,
    volume: -20,
    voice0: {
      oscillator: { type: "sawtooth" },
      envelope,
      filterEnvelope,
    },
    voice1: {
      oscillator: { type: "sine" },
      envelope,
      filterEnvelope,
    },
    vibratoRate: 0.5,
    vibratoAmount: 0.1,
  });
}
