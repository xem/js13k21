// Draw screen
draw_screen = () => {
  
  // HTML string
  var i, j, html = "";
  
  // UI
  C.reset();
  puzzlename.innerHTML = "";
  coincount.innerHTML = "";
  
  // Add "menu" and current world to body's class
  b.className = "";
  b.classList.add("menu");
  b.classList.add("world" + world);
  
  // Fade in
  fade.style.display = "block";
  b.classList.add("fadein");
  setTimeout(()=>{fade.style.display = "none"},500);
  
  html = "";
  scene.innerHTML = "";
  
  // World 0: main menu
  if(world == 0){
    puzzle = 0;
    html = "<div class=main><h1>LOSSST</h1><p><a onclick='world=-3;fadeout()'><h2>PLAY</h2></a><p><a onclick=world=-1;fadeout()>Select puzzle</a><p><a onclick=world=-2;fadeout()>Bonus</a><p class='emoji hide'>🌼<img src=grass.svg>";
    scene.innerHTML = html;
  }
  
  // World -1: levels
  else if(world == -1){
    html = "<div class='main levels'><h1>PUZZLES</h1>";
    for(var i in data){
      if(i != 0){
        html += "<h2 id='world_"+i+"'>World " + i + "</h2>";
        if(i==1){
          html += "<span style='width:61vh' onclick='world=-3;fadeout()'>intro</span><br>";
        }
        for(j in data[i]){
          console.log(j);
          if(j != 0){
            html += "<span onclick='world="+i+";puzzle="+j+";fadeout()'>" + j + "</span>";
          }
        }
      }
    }
    scene.innerHTML = html;
  }
  
  // World -2: Bonus
  else if(world == -2){
    html = "<div class='main bonus'><h1>BONUS</h1><p><a>Puzzle editor</a><span>(WebMonetization bonus)</span><p><a>Snake editor</a><span>(NEAR Protocol bonus)</span><p><a>Leaderboards</a><span>(Protocol Labs bonus)</span><p><a>Get more hints</a><span>(FLUX bonus)</span><p><a>Delete save</a>";
    scene.innerHTML = html;
  }
  
  // World -3: Intro
  else if(world == -3){
    intro();
  }
  
  // Else: no menu, draw current puzzle scene
  else {
    b.classList.remove("menu");
    b.classList.add("puzzle");
    draw_puzzle();
    return;
  }
};


nav_back = () => {
  var tmp;
  if(puzzle){
    tmp = world;
    world = -1;
    puzzle = 0;
    self.location.href = "#world_"+tmp;
  }
  else {
    world = 0;
  }
  fadeout();
}

fadeout = () => {
  fade.style.display = "block";
  setTimeout(()=>{b.classList.remove("fadein")},100);
  setTimeout(draw_screen, 500);
}

intro = () => {

  // UI
  C.reset();
  
  play_note(1);
  play_note(1);
  play_note(1);
  setInterval(play_next_note,500);
  
  C.camera({x:-200,y:50,z:-200,rx:50,rz:30});
  setTimeout(()=>{b.classList.add("intro")}, 3000);
  console.log(scene.style.transform);
  
  // Scene
  camrx = 30;
  camrz = 0;
  C.plane({n:"floor",w:1500,h:1500,css:"floor circle"});
  
  snake_length = 2; // without head  
  snake_position = [[-12,2,0]];
  head_position = [];
  head_angles = [270];
  head_angles_modulo = [270];
  head_angle = 270;
  head_angle_modulo = 270;
  body_moves = 0;
  on_wall = 0;
  high = 0;
  behind = 0;
  mirroring = 0;
  trees = [];
  flowers = [];
  animals = [];
  halt = 0;
  win = 0;
  w = 9;
  h = 9;
  
  // Puzzle
  C.group({n:"puzzlefloor"});
  
  // Snake's head
  C.group({g:"puzzlefloor",n:"head",x:snake_position[0][0]*50+25,y:snake_position[0][1]*50+25,z:4});
  C.group({g:"head",n:"head_scale"})
  C.sprite({g:"head_scale",n:"head_circle",x:0,y:0,w:50,h:50,z:25,css:"head circle"});
  C.group({g:"head_scale",n:"head_decoration",w:50,h:50,z:25});
  C.group({g:"head_decoration",n:"head_decoration_inner",w:50,h:50,x:25,y:25,rz:head_angle});
  C.plane({g:"head_decoration_inner",x:25,y:15,z:27,w:30,h:15,rx:-20,css:"eyes emoji",html:"👀"});
  C.plane({g:"head_decoration_inner",x:25,y:53,z:3,w:13,h:20,rx:180,css:"tongue",html:"Y"});
  
  // Snake's body
  head_position = snake_position[0];
  C.group({g:"puzzlefloor",n:"snakebody"});
  for(i = 1; i < snake_length * 5 + 1; i++){
    C.plane({g:"snakebody",n:"body" + (snake_length * 5 - i),x:(head_position[0] - i/5)*50+25,y:head_position[1]*50+25,w:30,h:30,z:25,rx:-45,ry:5,css:"body circle " + (i%2 ? "odd" : ""),i:"afterBegin"});
    snake_position.unshift([head_position[0]-i/5, head_position[1], 0]);
  }
  
  // Flowers
  for(i = 0; i < 15; i++){
    x = ~~(Math.random() * 15) - 6;
    y = ~~(Math.random() * 15) - 6;
    if(!flowers.find(a => a[0] > x-2 && a[0] < x+2 && a[1] > y-2 && a[1] < y+2) && (y < -3 || y > 3)){
      flowers.push([x,y]);
      //console.log(x, y);
      C.plane({g:"puzzlefloor",w:40,h:34,z:5,x:x*50,y:y*50,z:1,rx:0,o:"bottom",css:"emoji flower",html:"🌼"});
    }
  }
  
  // Stars
  C.plane({w:5000,h:2000,x:-1000,z:1000,rx:45,css:"stars",html:svg[0]});
  C.plane({x:0,z:900,rx:45,rz:-70,sx:2,sy:2,sz:2,css:"emoji moon",html:"🌙"});
  for(i=400;i--;)star.innerHTML+=`<text x=${Math.random()*5000} y=${Math.random()*2000}>.`;
  // Animation
  
  // Move right
  setTimeout(()=>r=1, 100);
  setTimeout(()=>r=0, 2000);
  
  // Sign
  C.plane({x:300,y:220,w:5,h:105,z:55,rx:-90,ry:-35,css:"sign"});
  C.plane({x:300,y:221,w:100,h:60,z:72,rx:-90,ry:-35,css:"sign",html:"SALE<p><span class=emoji>🪙</span> x 200"});
  
  // Look up
  setTimeout(()=>C.move({n:"head_decoration",z:28,ry:-45}), 3000);
  setTimeout(()=>C.camera({rx:120, z:-100,y:-300}),3500);
  
  // Look down
  setTimeout(()=>{
    b.classList.remove("intro");
    b.classList.add("intro2");
  },9000);
  setTimeout(()=>{
    C.camera({x:-200,y:50,z:-200,rx:50,rz:30});
    C.plane({w:50,h:70,x:480,y:200,z:30,html:svg[1],sx:7,sy:7,sz:7,rx:-90,ry:-20,rz:-45,css:"emoji rocket"});
  }, 10000);
  setTimeout(()=>{
    C.move({n:"head_decoration",ry:0})
  }, 10500);
  
  // Blink
  setTimeout(()=>{
    C.move({n:"p0",sx:.2,sy:.2,sz:.2});
  }, 11500);
  
  // Eye stars
  setTimeout(()=>{
    p0.classList.add("eyestars");
    C.move({n:"p0",sx:1,sy:1,sz:1});
    p0.innerHTML = "⭐⭐";
  }, 11600);
  
  // Show rocket
  setTimeout(()=>{
    C.camera({x:450,y:-70,z:-100,rx:60,rz:-20});
  }, 12500);
  
  // Show sign
  setTimeout(()=>{
    C.camera({x:370,y:0,z:-400,rx:60,rz:-40});
  }, 14500);
  
  // Show sign
  setTimeout(()=>{
    world = 1;
    puzzle = 1;
    fadeout();
  }, 17000);
  
  
}