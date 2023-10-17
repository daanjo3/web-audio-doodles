import * as Tone from 'tone'

export function makeWoodblock() {
  return new Tone.Sampler({
    urls: {
      'C5': '5_C_2-PB.wav'
    },
    baseUrl: 'https://daanjo3.github.io/web-audio-doodles/musicforwoodblocks/samples/virtual-orchestra/'
  })
}