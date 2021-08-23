melody = [83,80,78,76,78,80,83,80,78,76,78,80,78,80,83,80,83,85,80,85,83,80,78,76,0,0];
note = 0;

A = new AudioContext,
m = A.createBuffer(1, 1e6, 44100);

// Play a piano note
piano = e => {
  var V, v, p, c, b, w, r, D, i, s, u, D;
  
  for(
  
    // V: note length in seconds
    V = 1,
    
    // Temp vars for guitar synthesis
    v = [],
    p = c = 0,
    
    // Modulation
    // This function generates the i'th sample of a sinusoidal signal with a specific frequency and amplitude
    b = (e, t, a, i) => Math.sin(e / t * 6.28 * a + i),
    
    // Instrument synthesis
    w = (e, t) => Math.sin(e / 44100 * t * 6.28 + b(e, 44100, t, 0) ** 2 + .75 * b(e, 44100, t, .25) + .1 * b(e, 44100, t, .5)),
    
    // Sound samples
    D = [],
    
    // Loop on all the samples
    i = 0;
    i < 44100 * V;
    i++
  ){
  
    // Fill the samples array
    D[i] =
    
      // The first 88 samples represent the note's attack
      i < 88 
      ? i / 88.2 * w(i, e) 
      
      // The other samples represent the rest of the note
      : (1 - (i - 88.2) / (44100 * (V - .002))) ** ((.5 * Math.log(1e4 * e / 44100)) ** 2) * w(i, e);
  }
  
  // Play the note
  
  m.getChannelData(0).set(D),
  s = A.createBufferSource(),
  s.buffer = m,
  s.connect(A.destination),
  s.start()
}

play_note = () => {
  if(melody[note]){
    //piano(440*1.06**(melody[note] - 80));
  }
  note++;
  note %= melody.length;
}