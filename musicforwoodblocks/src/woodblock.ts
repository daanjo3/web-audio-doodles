import * as Tone from 'tone'

export function makeWoodblock() {
  return new Tone.Sampler({
    urls: {
      'C5': '5_C_2-PB.wav'
    },
    baseUrl: 'https://github.com/daanjo3/web-audio-doodles/blob/musicforwoodblocks/musicforwoodblocks/samples/virtual-orchestra/'
  })
}