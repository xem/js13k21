// Firefox detection
fx = navigator.userAgent.includes("Firefox");

world = 1; // 0: main menu, 1-5: current world
level = 1; // 0: world menu, 1-n: current level
puzzle = 1; // 0: level menu, 1-n: current puzzle
camrx = 20;
camrz = 0;

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
  '<svg id="star" fill="#aaa"></svg>',
]

// Draw screen
drawmenu = () => {
  document.body.classList.add("menu");
  var html, i;
  html = "";
  
  // Worlds
  if(world == 0){
    html += `<h1>TITLE</h1>`;
    for(i in data){
      if(i > 0)
        html += `<div class="b w w${i} ${i == 1 ? "" : "lock"}" onclick="drawmenu(world=${i})">${svg[+i]}<h2>${i==5 ? "SPACE" : "World " + i}</h2><p>${i == 1 ? "0 / 100" : ("<span class=emoji>🔒</span> " + i * 20 + " stars to unlock")}</div></div>`
    }
  }
  
  // Levels
  else if(level == 0){
    
    html += `<h1>World ${world}</h1><div class="back" onclick="drawmenu(world=0)">&lt;</div>`;
    for(i in data[world]){
      if(i > 0)
        html += `<div class="b w${world} l l${i} ${i < 2 ? "" : "lock"}" onclick="drawmenu(level=${i})"><h2>Level ${i}</h2></div>`
    }
  }
  
  // Puzzles
  else if(puzzle == 0){
    
    html += `<h1>World ${world} - Level ${level}</h1><div class=back onclick="drawmenu(level=0)">&lt;</div>`;
    for(i in data[world][level]){
      if(i > 0)
        html += `<div class="b w${world} l l${i} p p${i} ${i < 2 ? "" : "lock"}" onclick="drawpuzzle(puzzle=${i})"><h2>${i}</h2></div>`
    }
  }
  else {
    drawpuzzle();
    return;
  }
  b.innerHTML = html;

  // Fill star svg if present
  if(top.star)setTimeout(()=>{for(i=300;i--;)star.innerHTML+=`<text x=${Math.random()*500} y=${Math.random()*500}>.`},50);
};

drawpuzzle = () => {
  document.body.classList.remove("menu");
  var i, j, html;

  // Setup
  C.reset();  
  html = `<div id=viewport><div id=camera><div id=scene></div></div></div><div class=back onclick="drawmenu(puzzle=0)">&lt;</div>`;
  b.innerHTML = html;
  
  // Scene
  camrx = 20;
  camrz = 0;
  C.plane({w:1500,h:1500,css:"floor circle"});
  C.camera({z:0,rx:camrx,rz:camrz});
  C.sprite({x:-180,y:-250,z:5,w:65,h:75,sx:2,sy:2,sz:2,css:"tree emoji",html:"🌳",o:"bottom center"});
  C.plane({x:-180,y:-250,z:1,rz:280,w:65,h:75,sx:2,sy:2.8,sz:2,css:"tree shadow emoji",html:"🌳",o:"bottom center"});
  
  var w = 5;
  var h = 5;
  C.group({n:"board",w:250,h:250,z:2});
  for(j = 0; j < h; j++){
    for(i = 0; i < w; i++){
      C.plane({g:"board",x:25+i*50,y:25+j*50,w:55,h:55,css:"tile"});
    }
  }
  
  // Snake
  C.group({n:"head",x:0,y:0,z:4});
  C.sprite({n:"headcircle",x:0,y:0,w:50,h:50,z:25,css:"head circle"});
  C.plane({g:"head",x:0,y:-10,z:52,w:30,h:15,rx:-20,css:"eyes emoji",html:"👀"});
  C.plane({g:"head",x:0,y:38,z:28,w:13,h:20,rx:180,css:"tongue",html:"Y"});
  
  //for(i = -20; i >= -90; i-=10) C.plane({x:0,y:i,w:30,h:30,z:21,rx:-45,rz:1,css:"body circle " + ((i/20 != ~~(i/20)) ? "odd" : "")});
  //for(i = -5; i >= -100; i-=10) C.plane({x:i,y:-100,w:30,h:30,z:21,rx:-45,rz:1,css:"body circle " + (((i-5)/20 == ~~((i-5)/20)) ? "odd" : "")});
  //for(i = 10; i <= 50; i+=10) C.plane({x:-100,y:-100,w:30,h:30,z:21+i,rx:-45,rz:1,css:"body circle high " + ((i/20 == ~~(i/20)) ? "odd" : "")});
  
  C.plane({n:"toto",w:50,h:50,z:5,css:"red"});
};

totox = 2;
totoy = 2;
totodir = 0;
totodirmodulo = 0;

w = 250;
h = 250;

drawmenu();

pointerdown = 0;
pointerstartX = 0;
pointerstartY = 0;
pointermode = null;
pointerinverted = 0;


p0.ontouchstart = p0.onmousedown = e => {
  if(e.touches) e = e.touches[0];
  pointerdown = 1;
  pointerstartX = e.pageX;
  pointerstartY = e.pageY;
  pointermode = "cam";
  if(pointerstartY < innerHeight / 2){ pointerinverted = 1 }
  else { pointerinverted = 0 }
  
  var x, y;
  x = Math.floor(((fx ? e.layerX : e.offsetX) - 750 + w / 2) / 50);
  y = Math.floor(((fx ? e.layerY : e.offsetY) - 750 + w / 2) / 50);
  //console.log(x, y);
  if(x == totox && y == totoy){
    pointermode = "move";
  }
  //console.log(pointermode);
}

p0.ontouchend = p0.onmouseup = e => {
  pointerdown = 0;
  pointermode = null;
}

p0.ontouchmove = p0.onmousemove = e => {
  e.preventDefault();
  var dX, dY;
  if(e.touches) e = e.touches[0];
  if(pointermode == "cam"){
    dX = pointerstartX  -e.pageX; 
    dY = pointerstartY - e.pageY;
    camrx += dY / 10;
    if(camrx < 10) camrx = 10;
    if(camrx > 40) camrx = 40;
    pointerstartY = e.pageY;
    
    if(pointerinverted) camrz -= dX / 10;
    else camrz += dX / 10;
    
    if(camrz < -45) camrz = -45;
    if(camrz > 45) camrz = 45;
    pointerstartX = e.pageX;
    C.camera({rx:camrx,rz:camrz}) 
  }
  else if(pointermode == "move"){
    var x, y;
    x = Math.floor(((fx ? e.layerX : e.offsetX) - 750 + w / 2) / 50);
    y = Math.floor(((fx ? e.layerY : e.offsetY) - 750 + w / 2) / 50);
    console.log(x, y, totox, totoy, totodir%360);
    if(x != totox || y != totoy){
      if(x > totox){
        if(totodirmodulo == 180) totodir += 90;
        if(totodirmodulo == 0) totodir -= 90;
      }
      else if(y > totoy){
        if(totodirmodulo == 270) totodir += 90;
        if(totodirmodulo == 90) totodir -= 90;
      }
      else if(x < totox){
        if(totodirmodulo == 0) totodir += 90;
        if(totodirmodulo == 180) totodir -= 90;;
      }
      else if(y < totoy){
        if(totodirmodulo == 90) totodir += 90;
        if(totodirmodulo == 270) totodir -= 90;
      }
      totodirmodulo = (totodir + 360) % 360;
      totox = x;
      totoy = y;
      C.move({n:"toto",x:50*(x - Math.floor(w/100)), y: 50*(y - Math.floor(h/100))});
      C.move({n:"head",x:50*(x - Math.floor(w/100)), y: 50*(y - Math.floor(h/100)),rz:totodir});
      C.move({n:"headcircle",x:50*(x - Math.floor(w/100)), y: 50*(y - Math.floor(h/100))});
      C.camera();
    }
  }
}