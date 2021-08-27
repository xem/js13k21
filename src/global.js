// Global vars
world = 0; // 0: main menu, 1-5: current world
puzzle = 0; // 0: level menu, 1-n: current puzzle
coins = 0;
win = 0;
snake_position = 0;

// List of SVGs
svg = [
  
  // 0: Starry sky (filled with JS)
  '<svg id=star fill="#aaa"></svg>',
  
  // Rocket
  '<svg viewBox="0 0 36 36"><path fill="#A01" d="M1 17l8-7 16 1 1 16-7 8s0-6-6-12-12-6-12-6z"/><path fill="#FA3" d="M1 35s0-8 3-11S15 21 15 21 15 29 12 32c-3 3-11 3-11 3z"/><circle fill="#FC4" cx="9" cy="27" r="4"/><path fill="#5AE" d="M36 0s-10 0-22 10c-6 5-6 14-4 16s11 2 16-4c10-12 10-22 10-22z"/><path d="M26 5c-1.6 0-3.0.9-3.6 2.3.5-.2 1-.3 1.6-.3 2.2 0 4 1.7 4 4 0 .5-0 1-.3 1.6 1.3-.6 2.3-2 2.3-3.6 0-2.2-1.7-4-4-4z"/><path fill="#A01" d="M8 28s0-4 1-5 13-11 14-10-9 13-10 14S8 28 8 28z"/></svg>',
  
  ,,,
  
  // 1-4: Rocket parts 1 - 4 (menu)
  /*'<svg width=99 height=99><path d="M50 30Q20 40 20 90L80 90Q80 40 50 30L50 15" stroke="#000"/><ellipse cx=50 cy=65 rx=12 ry=12 stroke="#000"/></svg>',
  '<svg width=99 height=99><rect x=20 y=0 width=60 height=99 stroke="#000"/><path d="M20 30L1 80L20 75Z" stroke="#000"/><path d="M80 30L99 79L80 75Z" stroke="#000"/></svg>',
  '<svg width=99 height=99><rect x=20 y=5 width=60 height=65 stroke="#000"/><path d="M30 70L22 85L48 85L40 70Z" stroke="#000"/><path d="M60 70L52 85L78 85L70 70Z" stroke="#000"/></svg>',
  '<svg width=99 height=99><rect x=80 y=10 width=10 height=80 stroke="#000"/><path d="M90 90L80 80L90 80L80 70L90 70L80 60L90 60L80 50L90 50L80 40L90 40L80 30L90 30L80 20L90 20L80 10" stroke="#000"/><rect x=55 y=25 width=25 height=3 stroke="#000"/><rect x=55 y=50 width=25 height=3 stroke="#000"/></svg>',*/
  
  ,,,,
  
  // 9-10: Brick
  '<svg width=50 height=17><rect x=0 y=0 width=25 height=17 stroke="#000"/><rect x=25 y=0 width=25 height=17 stroke="#000"/></svg>',
  '<svg width=50 height=17><rect x=0 y=0 width=50 height=17 stroke="#000"/><rect x=18 y=0 width=15 height=17 stroke="#000"/></svg>',
];