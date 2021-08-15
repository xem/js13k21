world = 1; // 0: main menu, 1-5: current world
level = 1; // 0: world menu, 1-n: current level
puzzle = 1; // 0: level menu, 1-n: current puzzle
data = [

  // No world 0
  [],
  
  // World 1
  [
    
    // No level 0
    [],
    
    // Level 1
    [
      
      // No puzzle 0
      0,
      
      // Puzzle 1
      1,
      
      // Puzzle 2
      1,
      
      // Puzzle 3
      1,
      
      // Puzzle 4
      1,
      
      // Puzzle 5
      1,
      
      // Puzzle 6
      1,
      
      // Puzzle 7
      1,
      
      // Puzzle 8
      1,
      
      // Puzzle 9
      1,
    
    ],
    
    // Level 2
    [],
    
    // Level 3
    [],
    
    // Level 4
    [],
    
  
  ],
  
  // World 2
  [],
  
  // World 3
  [],
  
  // World 4
  [],
  
  // World 5
  [],

];

// SVG shapes
svg = [
  
  // No
  '',
  
  // Rocket 1 - 4
  '<svg width=99 height=99><path d="M50 30Q20 40 20 90L80 90Q80 40 50 30L50 15" stroke="#000000"/><ellipse cx=50 cy=65 rx=12 ry=12 stroke="#000000"/></svg>',
  '<svg width=99 height=99><rect x=20 y=0 width=60 height=99 stroke="#000000"/><path d="M20 30L1 80L20 75Z" stroke="#000000"/><path d="M80 30L99 79L80 75Z" stroke="#000000"/></svg>',
  '<svg width=99 height=99><rect x=20 y=5 width=60 height=65 stroke="#000000"/><path d="M30 70L22 85L48 85L40 70Z" stroke="#000000"/><path d="M60 70L52 85L78 85L70 70Z" stroke="#000000"/></svg>',
  '<svg width=99 height=99><rect x=80 y=10 width=10 height=80 stroke="#000000"/><path d="M90 90L80 80L90 80L80 70L90 70L80 60L90 60L80 50L90 50L80 40L90 40L80 30L90 30L80 20L90 20L80 10" stroke="#000000"/><rect x=55 y=25 width=25 height=3 stroke="#000000"/><rect x=55 y=50 width=25 height=3 stroke="#000000"/></svg>',
  
  // Stars
  '<svg id="star" fill="#aaa"></svg>'
]

// Draw screen
draw = () => {
  var html, i;
  html = "";
  
  // Worlds
  if(world == 0){
    html += `<h1>TITLE</h1>`;
    for(i in data){
      if(i > 0)
        html += `<div class="b w w${i} ${i == 1 ? "" : "lock"}" onclick="draw(world=${i})">${svg[+i]}<h2>${i==5 ? "SPACE" : "World " + i}</h2><p>${i == 1 ? "0 / 100" : ("<span class=emoji>🔒</span> " + i * 20 + " stars to unlock")}</div></div>`
    }
  }
  
  // Levels
  else if(level == 0){
    
    html += `<h1>World ${world}</h1><div class="back" onclick="draw(world=0)">&lt;</div>`;
    for(i in data[world]){
      if(i > 0)
        html += `<div class="b w${world} l l${i} ${i < 2 ? "" : "lock"}" onclick="draw(level=${i})"><h2>Level ${i}</h2></div>`
    }
  }
  
  // Puzzles
  else if(puzzle == 0){
    
    html += `<h1>World ${world} - Level ${level}</h1><div class=back onclick="draw(level=0)">&lt;</div>`;
    for(i in data[world][level]){
      if(i > 0)
        html += `<div class="b w${world} l l${i} p p${i} ${i < 2 ? "" : "lock"}" onclick="draw(puzzle=${i})"><h2>${i}</h2></div>`
    }
  }
  
  // Puzzle
  else {
    html += `<div id=viewport><div id=camera><div id=scene></div></div></div><div class=back onclick="draw(puzzle=0)">&lt;</div>`;
  }
  
  b.innerHTML = html;

  // Fill star svg if present
  if(top.star)setTimeout(()=>{for(i=300;i--;)star.innerHTML+=`<text x=${Math.random()*500} y=${Math.random()*500}>.`},50);
}

draw();