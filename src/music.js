songs = [

// intro
[..."    S P N L N P S P N L NPNPS P S U P U S P N L     G D B @ B D G D B @ BDBDG D G I D I K H F D     W T R P R T W T R P RTRTW T W X T X W T R P"].map(a=>a.codePointAt()),

// 1
[..."SPNLNPSPNLNPNPSPSUPUSPNL GDB@BDGDB@BDBDGDGIDIKHFD WTRPRTWTRPRTRTWTWXTXWTRP KHFDFHKHFDFHFHKHKLILNKIGZWUSUWUWNKIGIKIK"].map(a=>a.codePointAt()),

// 2
[..."POPOP O R PTW\\` UTUTRPKHD  POMMMMM K MMMMM K PPPPPORPPOMKU R POPOPO R PTW\\` UTUTRPKHD  POMMMMM K PPPPP O TTTTTRTRKJKJMKMKMKMKMKMKMKMKMKMK"].map(a=>a.codePointAt()),

// 3
[..."GEDEH JHGHL MLKLSQPQSQPQT QTSQOQSQOQSQONL GEDEH JHGHL MLKLSQPQSQPQT QTSQOQSQOQSQONL LMOOQOMLJJ LMOOQOMLJ GJLLMLJHGG GJLLMLJHG GEDEH JHGHL MLKLSQPQSQPQT QSTSQPQLMJHGGHGE LMOOQOMLJJ LMOOQOMLJ GJLLMLJHGG GJLLMLJHG "].map(a=>a.codePointAt()),

// 4
[..."C >C >C>CGJ H EH EHEBE> CC GECCBB EHBECC GECCBB EHBCCCB@BCCGECEGGJHGHJ LJHHHHGGGGEEEECB@BC LJHHHHGGGGEEEECB@BC EG  "].map(a=>a.codePointAt()),

// 5
[..."LPPPNLS SQPPPNLS SQPQSQPNKG LPPPNLS SQPPPNLS SQPQSQPN LSQPQSUS LSQPQSUS LUS QPNLN L LSQPQSUS LSQPQSUS LUS QPNLN SSSSSUWXWUSQPNL XXXXSXSUSXSUSXSUSX IPNLNPQP IPNLNPQP IQP NLKIK I "].map(a=>a.codePointAt()),

// 6
[..."79:<>:> =9= <8< 79:<>:>CA>:>A 79:<>:> =9= <8< 79:<>:>CA>:>A>@BCEBE FBF EBE >@BCEBE FBF E >@BCEBE FBF EBE >@BCEBE FBF E CEFHJFJ IEI HDH CEFHJFJOMJFJM OQRTVRV[ZVZ][ "].map(a=>a.codePointAt()),

// 7
[..."A<A CDCDAH DFHIHFDC HFDCDA<A CDCDAH DFHIHFDD C A  CCDCACDF DFHACDFDCAA@ CCDCACDF DFHIHFDD C A"].map(a=>a.codePointAt()),

// 8
[..."LKLKLGJHE @EG @DGH@LKLKLGJHE @EG @HGE GHJL CMLJ CLJH CJHG @@L@LX"].map(a=>a.codePointAt()),

// 9
[..."SVSNSNJNJG BGJGIGIGFILIJ G SVSNSNJNJG JIJJIJSJJI NMNNMNVNNM INQNPNPNMPSPQN NQNINIEIEB HGHLKNQONOL OSOLOLILIE HJNJLJLJILOLNLNLJNJIJOJIJQJIJSJIJSQOQNLJN L J"].map(a=>a.codePointAt()),

// 10
[...">>BEE QQ NN >>BEC QQ OO ==@GG SS OO ==@GG SS NN >>BEJ VV QQ >>BEJ VV SS LLOSS PQZ VNNLS QJ VUUSS SRRSS LLN L LLS Q VUUSS SUXVV PSS QP NN LE VUUSS SRRSS LLN L LLS Q VUUSS SUXVV PSS QP NJN LE"].map(a=>a.codePointAt())

];


note = 0;

A = new (self.AudioContext||self.webkitAudioContext),
m = A.createBuffer(1,1e6,44100);

// Play a piano note
piano = e => {
  var V,v,p,c,b,w,r,D,i,s,u,D;
  
  for(
  
    // V: note length in seconds
    V = 1.8,
    
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
  if(n > 32) piano(440*1.06**(n - 80));
}

play_next_note = () => {
  if(songs[song][note]){
    play_note(songs[song][note]);
    time = new Date();
  }
  //console.log(note, songs[song][note]);
  note++;
  if(song > 0) note %= (songs[song].length + 1);
}

play_last_note = () => {
  note--;
  note += songs[song].length;
  note %= songs[song].length;
  //console.log(note);
  if(songs[song][note])play_note(songs[song][note]);
}


// Sound effects
// from https://xem.github.io/MiniSoundEditor/

coin_sound = i => {
  var n=1.6e4;
  var c=n/7;
  var t=(i,n)=>(n-i)/n;
  if (i > n) return null;
  var q=Math.pow(t(i,n),2.1);
  return ((i<c ? ((i+Math.sin(-i/900)*10)&16) : i&13) ?q:-q)/9;
}

bzzt_sound = i => {
  var n=1e4;
  var t=(i,n)=>(n-i)/n;
  if (i > n) return null;
  var q = t(i,n);
  return Math.sin(i/55*Math.sin(i/99)+Math.sin(i/100))*q/5;
}

brrr_sound = i => {
  var n=9e5;
  var t=(i,n)=>(n-i)/n;
  if (i > n) return null;
  var q = t(i,n);
  return Math.sin(i*0.001*Math.sin(0.001*i+Math.sin(i/100)))*q*q/5;
}

play_sound = (f) => {
  var A, m, b, i, s; 
  var A=new AudioContext()
  var m=A.createBuffer(1,2e5,48e3)
  var b=m.getChannelData(0)
  for(i=2e5;i--;)b[i]=f(i)
  s=A.createBufferSource()
  s.buffer=m
  s.connect(A.destination)
  s.start()
}

set_song = n => {
  //console.log(p, lp);
  if(song!=n) note = (W == lW+1 || p == lp+1 || lW== -4) ? -3 : 0;
  song = n;
}