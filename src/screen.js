// Draw screen
draw_screen = () => {

  // Custom puzzle
  if(location.hash && location.hash.length > 1){
    W = 1;
    puzzle = 99;
    scene.innerHTML = "";
    custom = eval(decodeURI(location.hash.slice(1)));
    if(custom) b.className = "puzzle world" + (W= custom[10]);
    draw_puzzle();
    return;
  }
  
  if(coins && !custom) coincount.innerHTML = "<span class=emoji>🪙</span> x " + coins;
  else coincount.innerHTML = "";
  
  // HTML string
  var i, j, html = "";
  
  // UI
  C.reset();
  puzzlename.innerHTML = "";
  presents.innerHTML = "";
  
  // Add "menu" and current world to body's class
  b.className = "";
  b.classList.add("menu");
  b.classList.add("world" + W);
  if(mobile) b.classList.add("m");
  
  // Fade in
  fade.style.display = "block";
  if(puzzle == 0) {
    setTimeout(()=>{b.classList.add("fadein");},(W== -3 ? 2000 : 500) );
    setTimeout(()=>{fade.style.display = "none";},(W== -3 ? 1500 : 1000) );
  }
  
  html = "";
  scene.innerHTML = "";
  
  // World 0: main menu
  if(W== 0){
    puzzle = 0;
    html = "<div class=main><h1>LOSSST</h1><b>A Snake in Space</b><p><a onclick='cont();fadeout()'><h2>"+(save[1][1]?coins>164?"":"Continue":"PLAY")+"</h2></a><p><a onclick=W=-1;fadeout()>Select puzzle</a><p><a onclick=W=-2;fadeout()>Bonus</a><p class='emoji hide'>🌼";
    scene.innerHTML = html;
  }
  
  // World -1: levels
  else if(W == -1){
    html = "<div class='main levels'><h1>PUZZLES</h1>";
    for(var i in data){
      if(i != 0){
        if(i == 4) html += "<h2>The Moon!</h2>";
        else html += "<h2>World " + i + "</h2>";
        if(i==1){
          html += "<span style='width:61vh' onclick='W=-3;puzzle=0;fadeout()'>Intro</span><br>";
        }
        if(coins < [0,0,25,50,100][i]){
          html += [0,0,25,50,100][i] + " coins to unlock";
        }
        else {
          if(i==4){
          html += "<span style='width:61vh' onclick='W=-4;fadeout()'>Take off!</span><br>";
        }
          for(j in data[i]){
            //if(i==1)console.log(save[i][j], data[i][j]);
            if(j != 0){
              html += "<span class='"+ (save[i][j] ? "won" : "") + (save[i][j] && save[i][j] <= data[i][j][5] ? " par" : "") + "' onclick='W="+i+";puzzle="+j+";lastW=9;fadeout()'>" + j + "</span>";
            }
          }
        }
      }
    }
    scene.innerHTML = html;
  }
  
  // World -2: Bonus
  else if(W == -2){
    html = `<div class='main bonus'><h1>BONUS</h1><p><a onclick='document.monetization&&document.monetization.state=="started"?open("//xem.github.io/js13k21/editor"):(confirm("Log on Coil?")&&open("//coil.com/login"))'>Puzzle editor</a><span>(WebMonetization bonus)<p><a href=//xem.github.io/js13k21/FLUX>Snake editor</a><span>(FLUX bonus)<p><a href=//xem.github.io/js13k21/IPFS>Leaderboards</a><span>(IPFS bonus)<p><a onclick='open("//xem.github.io/js13k21/NEAR")'>Shop</a><span>(NEAR bonus)<p><a onclick='if(confirm("Sure?"))delete localStorage.lossst,location=location'>Delete save</a><p><a onclick='location="//xem.github.io/js13k21/share#"+JSON.stringify(save)'>Share</a><p><a href=//xem.github.io/articles/js13k21.html>Making-of`;
    scene.innerHTML = html;
  }
  
  // World -3/-4: Intro
  else if(W <= -3){
    intro();
  }
  
  // Else: no menu, draw current puzzle scene
  else {
    b.classList.remove("menu");
    b.classList.add("puzzle");
    b.classList.add("puzzle" + puzzle);
    draw_puzzle();
    return;
  }
};


nav_back = () => {
  clearInterval(song_interval);
  var tmp;
  if(custom){
    location.hash = "";
    song = ~~(Math.random()*10) + 1;
    note = 0;
  }
  else if(puzzle){
    W= -1;
    puzzle = 0;
  }
  else {
    W= 0;
  }
  fadeout();
}

// Transition to the next puzzle, with optional text.
// Also, easter-eggs at the end of worlds 3 and 4
fadeout = (text) => {
  //console.log(puzzle);
  var i, j, k, secret = 0;
  l = u = r = d = 0;
  fade.style.display = "block";
  presents.innerHTML = "";
  
  if(lastW== 3 && lastpuzzle > 35 && win){ // 3 - 36 to 45
    setTimeout(()=>presents.style.opacity=1, 800);
    text = "<p><table id=ta width=450 height=180>";
    for(k = 1; k < 11; k++){
      if(k == 6){
        text += "<tr>";
      }
      text += "<td id=pu"+ k + ((k == 46 - lastpuzzle) ? " style='transform:scale(.01)'" : "") + ">";
    }
    presents.innerHTML = text;
    
    for(k = 1; k < 11; k++){
      if(save[3][46-k]){
        secret++;
        current_puzzle = data[3][46-k];
        w = current_puzzle[2];
        h = current_puzzle[3] || w;
        floor = current_puzzle[0];
        
        for(j = h; j--;){
          for(i = w; i--;){
            C.plane({g:"pu"+k,o:"top left",x:i*85/w,y:j*85/h,w:85/w+2,h:85/h+2,css:"tile "+(((floor[j]>>i)&1) ? "black" : "")});
          }
        }
      }
    }
  }
  
  if(lastW== 4 && lastpuzzle > 36 && win){ // 3 - 37 to 40
    setTimeout(()=>presents.style.opacity=1, 800);
    text = "<p><table id=ta width=70 height=620>";
    for(k = 1; k < 5; k++){
      text += "<tr><td id=pu"+ k + ((k == lastpuzzle - 36) ? " style='transform:scale(.01)'" : "") + ">";
    }
    presents.innerHTML = text;
    
    for(k = 1; k < 5; k++){
      if(save[4][36+k]){
        secret++;
        current_puzzle = data[4][36+k];
        w = current_puzzle[2];
        h = current_puzzle[3] || w;
        floor = current_puzzle[0];
        
        for(j = h; j--;){
          for(i = w; i--;){
            C.plane({g:"pu"+k,o:"top left",x:i*70/w,y:80+j*70/h,w:70/w+2,h:70/h+2,css:"tile "+(((floor[j]>>i)&1) ? "black" : "")});
          }
        }
        
        floor = current_puzzle[1];
        
        for(j = h; j--;){
          for(i = w; i--;){
            C.plane({g:"pu"+k,o:"top left",x:i*70/w,y:j*70/h,w:70/w+2,h:70/h+2,css:"tile "+(((floor[j]>>i)&1) ? "black" : "")});
          }
        }
      }
    }
  }
  setTimeout(()=>{b.classList.remove("fadein")},100);
  if(text){
    if(!secret) presents.innerHTML = text;
    else if(lastW== 3){
      setTimeout(()=>{C.$("pu"+ (46 - lastpuzzle)).style.transform="";},1000);
    }
    else if(lastW== 4){
      //console.log(lastpuzzle - 36, C.$("pu"+ (lastpuzzle - 36)), C.$("pu"+ (lastpuzzle - 36)).style.transform)
      
      setTimeout(()=>{C.$("pu"+ (lastpuzzle - 36)).style.transform="";},1000);
    }
    setTimeout(()=>presents.style.opacity=1, 800);
    setTimeout(()=>presents.style.opacity=0, ((lastW== 3 && secret == 10) || (lastW== 4 && secret == 4)) ? 11500 : 3500);
    if(lastW== 3 && secret == 10){
      setTimeout(()=>{b.classList.add("egg3");lastpuzzle = lastW= 0;}, 2500);
    }
    if(lastW== 4 && secret == 4){
      setTimeout(()=>{b.classList.add("egg4");lastpuzzle = lastW= 0;}, 2500);
      setTimeout(()=>{open("//xem.github.io/js13k21/share#"+JSON.stringify(save))}, 11500);
    }
    setTimeout(draw_screen, ((lastW== 3 && secret == 10) || (lastW== 4 && secret == 4)) ? 12000 : 4000);
    
  }
  else {
    //lastpuzzle = lastW= 0;
    setTimeout(draw_screen, 600);
  }
  
}

intro = () => {
  //console.log(world, puzzle);
  
  // UI
  C.reset();
  if(W== -3) song = 0;
  presents.innerHTML = "js13kGames<br>presents";
  
  play_note(1);
  play_note(1);
  play_note(1);
  clearInterval(song_interval);
  
  if(W== -3)
    C.camera({x:-200,y:50,z:-200,rx:50,rz:30});
  else 
    C.camera({x:-200,y:50,z:200,rx:50,rz:0});
  
  // Scene
  camrx = 30;
  camrz = 0;
  C.plane({n:"floordiv",w:1500,h:1500,css:"floor circle"});
  
  setTimeout(()=>{
    b.classList.add("intro") // Hide back button, enable 5s transitions
    setTimeout(()=>{floordiv.style.height = '1450px'},100); // Fx fix
    song_interval = setInterval(play_next_note,210);
  }, 100);
  
  snake_length = 2; // without head  
  snake_position = [[-12,2,0]];
  head_position = [];
  head_angles = [270];
  head_angles_modulo = [270];
  head_angle = 270;
  head_angle_modulo = 270;
  head_portal = [0];
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
  steps = 0;
  
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
  if(W== -3){
    for(i = 0; i < 15; i++){
      x = ~~(Math.random() * 15) - 6;
      y = ~~(Math.random() * 15) - 6;
      if(!flowers.find(a => a[0] > x-2 && a[0] < x+2 && a[1] > y-2 && a[1] < y+2) && (y < -3 || y > 3)){
        flowers.push([x,y]);
        //console.log(x, y);
        C.plane({g:"puzzlefloor",w:40,h:34,z:5,x:x*50,y:y*50,z:1,rx:0,o:"bottom",css:"emoji flower",html:"🌼"});
      }
    }
  }
  
  // Stars
  C.plane({w:5000,h:3000,x:-1000,z:1000,rx:45,css:"stars",html:svg[0]});
  C.plane({x:-100,y:W<-3?500:0,z:W<-3?2000:900,rx:45,rz:-70,sx:2,sy:2,sz:2,css:"emoji moon",html:"🌙"});

  // Move right 7 times (world 1) / 10 times (world 4)
  for(i = 0; i < (7 + ((W== -3) ? 0 : 3)); i++){
    setTimeout(()=>{r=1;halt=0;move_snake(b);r=0;}, 300 + i * 250);
  }
    
  // Animation (world 1):
  if(W== -3){
    
    // Sign
    C.plane({x:300,y:220,w:5,h:105,z:55,rx:-90,ry:-35,css:"sign"});
    C.plane({x:300,y:221,w:100,h:60,z:72,rx:-90,ry:-35,css:"sign",html:"SALE<p><span class=emoji>🪙</span> x 100"});
    
    // Look up
    setTimeout(()=>C.move({n:"head_decoration",z:28,ry:-45}), 3000);
    setTimeout(()=>C.camera({rx:120, z:-100,y:-300}),3500);
    
    // js13k presents
    setTimeout(()=>presents.style.opacity = 1, 6000);
    setTimeout(()=>presents.style.opacity = 0, 9000);
    
    // Look down
    setTimeout(()=>{
      C.camera({x:-200,y:50,z:-200,rx:50,rz:30});
      C.plane({w:100,h:100,x:397,y:145,z:72,html:svg[1],rx:-90,ry:-22,sx:4,sy:4.5,sz:4,css:"rocket"});
    }, 10200);
    
    setTimeout(()=>{
      C.move({n:"head_decoration",ry:0})
    }, 14000);
    
    // Move right
    setTimeout(()=>{r=1;halt=0;move_snake(b);r=0}, 15500);
    setTimeout(()=>{r=1;halt=0;move_snake(b);r=0}, 15700);
    
    // Blink
    setTimeout(()=>{
      C.move({n:"p0",sx:.2,sy:.2,sz:.2});
    }, 17500);
    
    // Eye stars
    setTimeout(()=>{
      p0.classList.add("eyestars");
      C.move({n:"p0",sx:1,sy:1,sz:1});
      p0.innerHTML = "⭐⭐";
      b.classList.remove("intro2");
      b.classList.add("intro");
    }, 17600);
    
    // Show rocket
    setTimeout(()=>{
      C.camera({x:450,y:-70,z:-100,rx:60,rz:-20});
    }, 18500);
    
    // Show sign
    setTimeout(()=>{
      C.camera({x:370,y:0,z:-400,rx:60,rz:-40});
    }, 23500);
    
    // Fade out
    setTimeout(()=>{
      W= 1;
      puzzle = 1;
      fadeout("<h1>LOSSST</h1>");
    }, 30000);
    
    setTimeout(()=>{
      clearInterval(song_interval);
      song = 1;
      note = 75;
    }, 33000);
  }
  
  // World 4
  else {
    C.plane({n:"rocket",w:100,h:100,x:-150,y:200,z:72,html:svg[1],rx:-90,sx:4,sy:4.5,sz:4,css:"rocket"});
    
    // Remove snake
    // Play sound
    // Move rocket
    // Look up
    setTimeout(()=>{
      puzzlefloor.remove();
      play_sound(brrr_sound);
      C.move({n:"rocket",y: -1000, z: 4000});
      C.camera({rx: 140, y: -1000});
    
    }, 4000);
    
    setTimeout(()=>{
      W= 4;
      puzzle = 1;
      fadeout();
    }, 10000);
    
    setTimeout(()=>{
      clearInterval(song_interval);
      song = 9;
      note = 0;
    }, 10500);
  }
  
};

cont = () => {
  //W= puzzle = 1;
  var i,j;
  if(save[1][1]){
    for(i = 1; i < 5; i++){
      for(j = 1; j < data[i].length; j++){
        if(!save[i][j]) {
          W=i;
          puzzle=j;
          lastW=9;
          return;
        }
      }
    }
  }
  else{
    W= -3;
    puzzle = 0;
  }
}