import * as Tone from 'tone'

export function makeWoodblock() {
  return new Tone.Sampler({
    urls: {
      "C5"  : "samples/virtual-orchestra/5_C_2-PB.wav"
    }
  })
}

/*
    urls: {
      "Ab4" : "samples/virtual-orchestra/4_Ab_2-PB.wav",
      "Bb4" : "samples/virtual-orchestra/4_Bb_2-PB.wav",
      "Gb4" : "samples/virtual-orchestra/4_Gb_2-PB.wav",
      "Ab5" : "samples/virtual-orchestra/5_Ab_2-PB.wav",
      "Bb5" : "samples/virtual-orchestra/5_Bb_2-PB.wav",
      "C5"  : "samples/virtual-orchestra/5_C_2-PB.wav",
      "D5"  : "samples/virtual-orchestra/5_D_2-PB.wav",
      "E5"  : "samples/virtual-orchestra/5_E_2-PB.wav", 
      "Gb5" : "samples/virtual-orchestra/5_Gb_2-PB.wav",
      "Ab6" : "samples/virtual-orchestra/6_Ab_2-PB.wav",
      "Bb6" : "samples/virtual-orchestra/6_Bb_2-PB.wav",
      "C6"  : "samples/virtual-orchestra/6_C_2-PB.wav",
      "E6"  : "samples/virtual-orchestra/6_E_2-PB.wav",
      "Gb6" : "samples/virtual-orchestra/6_Gb_2-PB.wav",
      "Ab7" : "samples/virtual-orchestra/7_Ab_2-PB.wav",
      "Bb7" : "samples/virtual-orchestra/7_Bb_2-PB.wav",
      "C7"  : "samples/virtual-orchestra/7_C_2-PB.wav", 
      "D7"  : "samples/virtual-orchestra/7_D_2-PB.wav",
      "E7"  : "samples/virtual-orchestra/7_E_2-PB.wav",
      "Gb7" : "samples/virtual-orchestra/7_Gb_2-PB.wav",
    }
*/