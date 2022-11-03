// Global vars
W = 0; // 0: main menu; 1-5: current world; -1; levels -3/-4: cutss
p = 0; // 0: level menu; 1-n: current puzzle
lW = 0;
lp = 0;
coins = 0;
win = 0;
awin = 0;
S = 0;
n = 0;
portaling = 0;
portals1 = 0;
portals2 = 0;
mirror = 0;
custom = 0;
H = "";
for(i=500;i--;)H += `<text x=${Math.random()*5000} y=${Math.random()*5000}>.</text>`;
O = navigator.userAgent.match("Mobi");
I = 0;
time = 0;
hp = [];
pp = [];
save = eval(localStorage.lossst)||[[0],[0],[0],[0],[0]];
E = eval(localStorage.lossst_e)||0;
song = 0;
I = 0;

for(i of save){
  for(j of i){
    if(j) coins++;
  }
}
coins += E;

// List of SVGs
svg = [
  
  // 0: Starry sky (filled with JS)
  '<svg fill="#aaa">'+H+'</svg>',
  
  // 1: Rocket
  '<svg width=990 height=990><path d="M280 500L200 600L200 750L800 750L800 600L720 500Z" fill="#a01"/><path d="M500 0Q200 440 300 750L700 750Q800 440 500 0" fill="#5AE"/><circle cx=500 cy=350 r=90 fill="#000"/><path d="M460 750M450 750Q500 250 550 750" fill="#a01"/><path d="M350 750Q300 840 500 990Q700 840 650 750Z" fill="#fa3"/><path d="M420 750Q350 800 500 900Q650 800 580 760Z" fill="#fc4"/></svg>',

  
  // 2, 3: Brick
  '<svg width=50 height=17><rect x=0 y=0 width=25 height=17 stroke="#000"/><rect x=25 y=0 width=25 height=17 stroke="#000"/></svg>',
  '<svg width=50 height=17><rect x=0 y=0 width=50 height=17 stroke="#000"/><path d="M17 0L17 17M34 0L34 17" stroke="#000"/></svg>',
];