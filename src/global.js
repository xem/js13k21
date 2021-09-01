// Global vars
world = 1; // 0: main menu, 1-5: current world
puzzle = 49; // 0: level menu, 1-n: current puzzle
coins = 0;
win = 0;
haltwin = 0;
snake_position = 0;
next_target = 0;
portaling = 0;
portals1 = 0;
portals2 = 0;
mirror = 0;

// List of SVGs
svg = [
  
  // 0: Starry sky (filled with JS)
  '<svg id=star fill="#aaa"></svg>',
  
  // Rocket
  '<svg viewBox="0 0 36 36"><path fill="#A01" d="M1 17l8-7 16 1 1 16-7 8s0-6-6-12-12-6-12-6z"/><path fill="#FA3" d="M1 35s0-8 3-11S15 21 15 21 15 29 12 32c-3 3-11 3-11 3z"/><circle fill="#FC4" cx="9" cy="27" r="4"/><path fill="#5AE" d="M36 0s-10 0-22 10c-6 5-6 14-4 16s11 2 16-4c10-12 10-22 10-22z"/><path d="M26 5c-1.6 0-3.0.9-3.6 2.3.5-.2 1-.3 1.6-.3 2.2 0 4 1.7 4 4 0 .5-0 1-.3 1.6 1.3-.6 2.3-2 2.3-3.6 0-2.2-1.7-4-4-4z"/><path fill="#A01" d="M8 28s0-4 1-5 13-11 14-10-9 13-10 14S8 28 8 28z"/></svg>',
  
  ,,,
  
  ,,,,
  
  // 9-10: Brick
  '<svg width=50 height=17><rect x=0 y=0 width=25 height=17 stroke="#000"/><rect x=25 y=0 width=25 height=17 stroke="#000"/></svg>',
  '<svg width=50 height=17><rect x=0 y=0 width=50 height=17 stroke="#000"/><path d="M17 0L17 17M34 0L34 17" stroke="#000"/></svg>',
];