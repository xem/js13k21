// Global vars
world = 4; // 0: main menu, 1-5: current world
puzzle = 1; // 0: level menu, 1-n: current puzzle
coins = 0;
win = 0;
haltwin = 0;
snake_position = 0;
next_target = 0;
portaling = 0;
portals1 = 0;
portals2 = 0;
mirror = 0;
custom = 0;
html = "";
for(i=500;i--;)html += `<text x=${Math.random()*5000} y=${Math.random()*5000}>.</text>`;
mobile = navigator.userAgent.match("Mobile");
song_interval = 0;


// List of SVGs
svg = [
  
  // 0: Starry sky (filled with JS)
  '<svg fill="#aaa">'+html+'</svg>',
  
  // Rocket
  '<svg width=99 height=99><path d="M28 50L20 60L20 75L80 75L80 60L72 50Z" fill="#a01"/><path d="M50 0Q20 44 30 75L70 75Q80 44 50 0" fill="#5AE"/><circle cx=50 cy=35 r=9 fill="#000"/><path d="M46 75M45 75Q50 25 55 75" fill="#a01"/><path d="M35 75Q30 84 50 99Q70 84 65 75Z" fill="#fa3"/><path d="M42 75Q35 80 50 90Q65 80 58 76Z" fill="#fc4"/></svg>',
  
  ,,,
  
  ,,,,
  
  // 9-10: Brick
  '<svg width=50 height=17><rect x=0 y=0 width=25 height=17 stroke="#000"/><rect x=25 y=0 width=25 height=17 stroke="#000"/></svg>',
  '<svg width=50 height=17><rect x=0 y=0 width=50 height=17 stroke="#000"/><path d="M17 0L17 17M34 0L34 17" stroke="#000"/></svg>',
];