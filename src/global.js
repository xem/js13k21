// Global vars
world = 1; // 0: main menu, 1-5: current world
level = 1; // 0: world menu, 1-n: current level
puzzle = 1; // 0: level menu, 1-n: current puzzle

// List of SVGs
svg = [
  
  // 0: Starry sky (filled with JS)
  '<svg id=star fill="#aaa"></svg>',
  
  // 1-4: Rocket parts 1 - 4 (menu)
  '<svg width=99 height=99><path d="M50 30Q20 40 20 90L80 90Q80 40 50 30L50 15" stroke="#000"/><ellipse cx=50 cy=65 rx=12 ry=12 stroke="#000"/></svg>',
  '<svg width=99 height=99><rect x=20 y=0 width=60 height=99 stroke="#000"/><path d="M20 30L1 80L20 75Z" stroke="#000"/><path d="M80 30L99 79L80 75Z" stroke="#000"/></svg>',
  '<svg width=99 height=99><rect x=20 y=5 width=60 height=65 stroke="#000"/><path d="M30 70L22 85L48 85L40 70Z" stroke="#000"/><path d="M60 70L52 85L78 85L70 70Z" stroke="#000"/></svg>',
  '<svg width=99 height=99><rect x=80 y=10 width=10 height=80 stroke="#000"/><path d="M90 90L80 80L90 80L80 70L90 70L80 60L90 60L80 50L90 50L80 40L90 40L80 30L90 30L80 20L90 20L80 10" stroke="#000"/><rect x=55 y=25 width=25 height=3 stroke="#000"/><rect x=55 y=50 width=25 height=3 stroke="#000"/></svg>',
  
  // 5-8: U, L, D, R
  '<svg onmousedown="u=1;move_snake(b)" onmouseup="u=0" ontouchstart="u=1;move_snake(b)" ontouchend="u=0" width=50 height=50><path d="M12 30L25 15L38 30" stroke="#000"/></svg>',
  '<svg onmousedown="l=1;move_snake(b)" onmouseup="l=0" ontouchstart="l=1;move_snake(b)" ontouchend="l=0" width=50 height=50><path d="M30 12L15 25L30 38" stroke="#000"/></svg>',
  '<svg onmousedown="d=1;move_snake(b)" onmouseup="d=0" ontouchstart="d=1;move_snake(b)" ontouchend="d=0" width=50 height=50><path d="M12 20L25 35L38 20" stroke="#000"/></svg>',
  '<svg onmousedown="r=1;move_snake(b)" onmouseup="r=0" ontouchstart="r=1;move_snake(b)" ontouchend="r=0" width=50 height=50><path d="M20 12L35 25L20 38" stroke="#000"/></svg>',
  
  // 9-10: Brick
  '<svg width=50 height=17><rect x=0 y=0 width=25 height=17 stroke="#000"/><rect x=25 y=0 width=25 height=17 stroke="#000"/></svg>',
  '<svg width=50 height=17><rect x=0 y=0 width=50 height=17 stroke="#000"/><rect x=18 y=0 width=15 height=17 stroke="#000"/></svg>',
];