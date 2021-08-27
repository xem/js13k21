melody = [
83,80,78,76,78,80,83,80,78,76,78,80,78,80,83,80,83,85,80,85,83,80,78,76,,
71,68,66,64,66,68,71,68,66,64,66,68,66,68,71,68,71,73,68,73,75,72,70,68,,
87,84,82,80,82,84,87,84,82,80,82,84,82,84,87,84,87,88,84,88,87,84,82,80,,
75,72,70,68,70,72,75,72,70,68,70,72,70,72,75,72,75,76,73,76,78,75,73,71,90,87,85,83,85,87,85,87,78,75,73,71,73,75,73,75];

melody2 = [
80,79,80,79,80,79,,82,,80,84,87,92,96,,85,84,85,84,82,80,75,72,68,,,
80,79,77,77,77,77,77,,75,,77,77,77,77,77,,75,,80,80,80,80,80,79,82,80,80,79,77,75,85,,82,,
80,79,80,79,80,79,,82,,80,84,87,92,96,,85,84,85,84,82,80,75,72,68,,,
80,79,77,77,77,77,77,,75,,80,80,80,80,80,,79,,84,84,84,84,84,82,84,82,75,74,75,74,77,75,77,75,77,75,77,75,77,75,77,75,77,75,77,75,77,75,77,75,]

melody3 = [
71,69,68,69,72,,74,72,71,72,76,,77,76,75,76,83,81,80,81,83,81,80,81,84,,81,84,83,81,79,81,83,81,79,81,83,81,79,78,76,,
71,69,68,69,72,,74,72,71,72,76,,77,76,75,76,83,81,80,81,83,81,80,81,84,,81,84,83,81,79,81,83,81,79,81,83,81,79,78,76,,
76,77,79,79,81,79,77,76,74,74,,76,77,79,79,81,79,77,76,74,,
71,74,76,76,77,76,74,72,71,71,,71,74,76,76,77,76,74,72,71,,
71,69,68,69,72,,74,72,71,72,76,,77,76,75,76,83,81,80,81,83,81,80,81,84,,81,83,84,83,81,80,81,76,77,74,72,71,71,72,71,69,,
76,77,79,79,81,79,77,76,74,74,,76,77,79,79,81,79,77,76,74,,
71,74,76,76,77,76,74,72,71,71,,71,74,76,76,77,76,74,72,71,,];

melody4 = [
67,,62,67,,62,67,62,67,71,74,,72,,69,72,,69,72,69,66,69,62,,
67,67,,71,69,67,67,66,66,,69,72,66,69,67,67,,71,69,67,67,66,66,,
69,72,66,67,67,67,66,64,66,67,67,71,69,67,69,71,71,74,72,71,72,74,,
76,74,72,72,72,72,71,71,71,71,69,69,69,69,67,66,64,66,67,,
76,74,72,72,72,72,71,71,71,71,69,69,69,69,67,66,64,66,67,,69,71,,,];


note = 0;

A = new AudioContext,
m = A.createBuffer(1,1e6,44100);

// Play a piano note
piano = e => {
  var V,v,p,c,b,w,r,D,i,s,u,D;
  
  for(
  
    // V: note length in seconds
    V = 2,
    
    // Temp vars for guitar synthesis
    v = [],
    p = c = 0,
    
    // Modulation
    // This function generates the i'th sample of a sinusoidal signal with a specific frequency and amplitude
    b = (e,t,a,i) => Math.sin(e / t * 6.28 * a + i),
    
    // Instrument synthesis
    w = (e,t) => Math.sin(e / 44100 * t * 6.28 + b(e,44100,t,0) ** 2 + .75 * b(e,44100,t,.25) + .1 * b(e,44100,t,.5)),
    
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
      ? i / 88.2 * w(i,e) / 9
      
      // The other samples represent the rest of the note
      : (1 - (i - 88.2) / (44100 * (V - .002))) ** ((.5 * Math.log(1e4 * e / 44100)) ** 2) * w(i,e) / 9;
  }
  
  // Play the note
  
  m.getChannelData(0).set(D),
  s = A.createBufferSource(),
  s.buffer = m,
  s.connect(A.destination),
  s.start()
}

play_note = n => {
  //piano(440*1.06**(n - 80));
}

play_next_note = () => {
  if(melody[note])play_note(melody[note]);
  note++;
  note %= melody.length;
  if(note == 0) note = 1;
  console.log(note);
}

play_last_note = () => {
  note--;
  note--;
  note += melody.length;
  note %= melody.length;
  console.log(note);
  if(melody[note])play_note(melody[note]);
}


// Sound effects
// from https://xem.github.io/MiniSoundEditor/

coinsound = i => {
  var n=1.6e4;
  var c=n/7;
  if (i > n) return null;
  var q=Math.pow(t(i,n),2.1);
  return ((i<c ? ((i+Math.sin(-i/900)*10)&16) : i&13) ?q:-q)/9;
}

play_coin_sound = () => {
  var A, m, b, i, s; 
  t=(i,n)=>(n-i)/n;
  var A=new AudioContext()
  var m=A.createBuffer(1,96e3,48e3)
  var b=m.getChannelData(0)
  for(i=96e3;i--;)b[i]=coinsound(i)
  s=A.createBufferSource()
  s.buffer=m
  s.connect(A.destination)
  s.start()
}