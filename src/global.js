// Global vars
W = 1; // 0: main menu; 1-5: current world; -1; levels -3/-4: cutss
p = 1; // 0: level menu; 1-n: current puzzle
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
  '<svg width=99 height=99><path d="M28 50L20 60L20 75L80 75L80 60L72 50Z" fill="#a01"/><path d="M50 0Q20 44 30 75L70 75Q80 44 50 0" fill="#5AE"/><circle cx=50 cy=35 r=9 fill="#000"/><path d="M46 75M45 75Q50 25 55 75" fill="#a01"/><path d="M35 75Q30 84 50 99Q70 84 65 75Z" fill="#fa3"/><path d="M42 75Q35 80 50 90Q65 80 58 76Z" fill="#fc4"/></svg>',

  
  // 2, 3: Brick
  '<svg width=50 height=17><rect x=0 y=0 width=25 height=17 stroke="#000"/><rect x=25 y=0 width=25 height=17 stroke="#000"/></svg>',
  '<svg width=50 height=17><rect x=0 y=0 width=50 height=17 stroke="#000"/><path d="M17 0L17 17M34 0L34 17" stroke="#000"/></svg>',
];