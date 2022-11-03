// Draw screen
draw_screen = () => {

  // Custom p
  if(location.hash && location.hash.length > 1){
    W = 1;
    p = 99;
    s.innerHTML = "";
    custom = eval(decodeURI(location.hash.slice(1)));
    if(custom) b.className = "p w" + (W= custom[10]);
    draw_p();
    return;
  }
  
  if(coins && !custom) t.innerHTML = "<span class=e>🪙</span> x " + coins;
  else t.innerHTML = "";
  
  // HTML string
  var i, j, H = "";
  
  // UI
  C.R();
  pn.innerHTML = "";
  e.innerHTML = "";
  
  // Add "menu" and current world to body's class
  b.className = "";
  b.classList.add("z");
  b.classList.add("w" + W);
  if(O) b.classList.add("x");
  
  // Fade in
  fade.style.display = "block";
  if(p == 0) {
    setTimeout(()=>{b.classList.add("f");},(W== -3 ? 2000 : 500) );
    setTimeout(()=>{fade.style.display = "none";},(W== -3 ? 1500 : 1000) );
  }
  
  H = "";
  s.innerHTML = "";
  
  // World 0: main menu
  if(W == 0){
    p = 0;
    H = "<div class=m><h1>LOSSST</h1><b>A Snake in Space</b><p><a onclick='cont();fadeout()'><h2>"+(save[1][1]?coins>164?"HARD MODE":"Continue":"PLAY")+"</h2></a><p><a onclick=W=-1;fadeout()>Select puzzle</a><p><a onclick=W=-2;fadeout()>Bonus</a><p class='emoji hide'>🌼";
    s.innerHTML = H;
  }
  
  // World -1: levels
  else if(W == -1){
    H = "<div class='m l'><h1>PUZZLES</h1>";
    for(var i in data){
      if(i != 0){
        if(i == 4) H += "<h2>The Moon!</h2>";
        else H += "<h2>World " + i + "</h2>";
        if(i==1){
          H += "<span style='width:61vh' onclick='W=-3;p=0;fadeout()'>Intro</span><br>";
        }
        if(coins < [0,0,25,50,100][i]){
          H += [0,0,25,50,100][i] + " coins to unlock";
        }
        else {
          if(i==4){
          H += "<span style='width:61vh' onclick='W=-4;fadeout()'>Take off!</span><br>";
        }
          for(j in data[i]){
            //if(i==1)console.log(save[i][j], data[i][j]);
            if(j != 0){
              H += "<span class='"+ (save[i][j] ? "won" : "") + (save[i][j] && save[i][j] <= data[i][j][5] ? " par" : "") + "' onclick='W="+i+";p="+j+";lW=lp=99;fadeout()'>" + j + "</span>";
            }
          }
        }
      }
    }
    s.innerHTML = H;
  }
  
  // World -2: Bonus
  else if(W == -2){
    H = `<div class='m o'><h1>BONUS</h1><p><a href="${document.monetization&&document.monetization.state=="started"?"//xem.github.io/js13k21/editor":"//coil.com/login"}" target=_blank>Puzzle editor</a><span>(WebMonetization bonus)<p><a href="//xem.github.io/js13k21/FLUX" target=_blank>Snake editor</a><span>(FLUX bonus)<p><a href="//xem.github.io/js13k21/IPFS" target=_blank>Leaderboards</a><span>(IPFS bonus)<p><a href="//xem.github.io/js13k21/NEAR"  target=_blank>Shop</a><span>(NEAR bonus)<p><a onclick='if(confirm("Sure?"))delete localStorage.lossst,location=location'>Delete save</a><p><a href="//xem.github.io/js13k21/share#${JSON.stringify(save)}">Share</a><p><a href="//xem.github.io/articles/js13k21.html">Making-of`;
    s.innerHTML = H;
  }
  
  // World -3/-4: Intro
  else if(W <= -3){
    intro();
  }
  
  // Else: no menu, draw current p s
  else {
    b.classList.remove("z");
    b.classList.add("p");
    b.classList.add("p" + p);
    draw_p();
    return;
  }
};


nav_back = () => {
  clearInterval(I);
  var tmp;
  if(custom){
    location.hash = "";
    song = ~~(Math.random()*10) + 1;
    note = 0;
  }
  else if(p){
    W= -1;
    p = 0;
  }
  else {
    W= 0;
  }
  fadeout();
}

// Transition to the next p, with optional text.
// Also, easter-eggs at the end of worlds 3 and 4
fadeout = (text) => {
  
  if(W == 1 && lp == 1){
    text = "Your progress is saved automatically";
  }
  if(W == 1 && lp == 2){
    text = "Rotate the camera with your " + (O ? "finger" : "mouse");
  }
  if(W == 4 && lp == 1){
    text = "The gravity is lower<br>You can move up and down";
  }
  
  //console.log(p);
  var i, j, k, secret = 0;
  l = u = r = d = 0;
  fade.style.display = "block";
  e.innerHTML = "";
  
  if(lW == 3 && lp > 35 && win){ // 3 - 36 to 45
    setTimeout(()=>e.style.opacity=1, 800);
    text = "<p><table id=ta width=450 height=180>";
    for(k = 1; k < 11; k++){
      if(k == 6){
        text += "<tr>";
      }
      text += "<td id=pu"+ k + ((k == 46 - lp) ? " style='transform:scale(.01)'" : "") + ">";
    }
    e.innerHTML = text;
    
    for(k = 1; k < 11; k++){
      if(save[3][46-k]){
        secret++;
        current_p = data[3][46-k];
        w = current_p[2];
        h = current_p[3] || w;
        floor = current_p[0];
        
        for(j = h; j--;){
          for(i = w; i--;){
            C.plane({g:"pu"+k,o:"top left",x:i*85/w,y:j*85/h,w:85/w+2,h:85/h+2,css:"v "+(((floor[j]>>i)&1) ? "k" : "")});
          }
        }
      }
    }
  }
  
  if(lW== 4 && lp > 36 && win){ // 3 - 37 to 40
    setTimeout(()=>e.style.opacity=1, 800);
    text = "<p><table id=ta width=70 height=620>";
    for(k = 1; k < 5; k++){
      text += "<tr><td id=pu"+ k + ((k == lp - 36) ? " style='transform:scale(.01)'" : "") + ">";
    }
    e.innerHTML = text;
    
    for(k = 1; k < 5; k++){
      if(save[4][36+k]){
        secret++;
        current_p = data[4][36+k];
        w = current_p[2];
        h = current_p[3] || w;
        floor = current_p[0];
        
        for(j = h; j--;){
          for(i = w; i--;){
            C.plane({g:"pu"+k,o:"top left",x:i*70/w,y:80+j*70/h,w:70/w+2,h:70/h+2,css:"v "+(((floor[j]>>i)&1) ? "k" : "")});
          }
        }
        
        floor = current_p[1];
        
        for(j = h; j--;){
          for(i = w; i--;){
            C.plane({g:"pu"+k,o:"top left",x:i*70/w,y:j*70/h,w:70/w+2,h:70/h+2,css:"v "+(((floor[j]>>i)&1) ? "k" : "")});
          }
        }
      }
    }
  }
  setTimeout(()=>{b.classList.remove("f")},100);
  if(text){
    if(!secret) e.innerHTML = text;
    else if(lW== 3){
      setTimeout(()=>{C.$("pu"+ (46 - lp)).style.transform="";},1000);
    }
    else if(lW== 4){
      //console.log(lp - 36, C.$("pu"+ (lp - 36)), C.$("pu"+ (lp - 36)).style.transform)
      
      setTimeout(()=>{C.$("pu"+ (lp - 36)).style.transform="";},1000);
    }
    setTimeout(()=>e.style.opacity=1, 800);
    setTimeout(()=>e.style.opacity=0, ((lW== 3 && secret == 10) || (lW== 4 && secret == 4)) ? 11500 : 3500);
    if(lW== 3 && secret == 10){
      setTimeout(()=>{b.classList.add("egg3");lp = lW= 0;}, 2500);
    }
    if(lW == 4 && secret == 4){
      setTimeout(()=>{b.classList.add("egg4");lp = lW = 0;}, 2500);
      setTimeout(()=>{open("//xem.github.io/js13k21/share#"+JSON.stringify(save))}, 11500);
    }
    setTimeout(draw_screen, ((lW== 3 && secret == 10) || (lW== 4 && secret == 4)) ? 12000 : 4000);
    
  }
  else {
    //lp = lW= 0;
    setTimeout(draw_screen, 600);
  }
  
}

intro = () => {
  //console.log(world, p);
  
  // UI
  C.R();
  
  if(W == -3) song = 0;
  e.innerHTML = "js13kGames<br>presents";
  
  play_note(1);
  play_note(1);
  play_note(1);
  clearInterval(I);
  
  if(W == -3)
    C.c({x:-200,y:50,z:-200,rx:50,rz:30});
  else 
    C.c({x:-200,y:50,z:200,rx:50,rz:0});
  
  // s
  rx = 30;
  rz = 0;
  C.plane({n:"fd",w:1500,h:1500,css:"r c"});
  
  setTimeout(()=>{
    b.classList.add("intro") // Hide back button, enable 5s transitions
    setTimeout(()=>{fd.style.height = '1450px'},100); // Fx fix
    clearInterval(I);
    I = setInterval(play_next_note,210);
  }, 100);
  
  snake_length = 2; // without head  
  S = [[-12,2,0]];
  hp = [];
  B_angles = [270];
  B_angles_modulo = [270];
  B_angle = 270;
  B_angle_modulo = 270;
  B_portal = [0];
  body_moves = 0;
  on_wall = 0;
  high = 0;
  behind = 0;
  mirroring = 0;
  trees = [];
  flowers = [];
  animals = [];
  a = 0;
  win = 0;
  w = 9;
  h = 9;
  steps = 0;
  
  // Puzzle
  C.group({n:"pf"});
  
  // Snake's head
  C.group({g:"pf",n:"y",x:S[0][0]*50+25,y:S[0][1]*50+25,z:4});
  C.group({g:"y",n:"h2"})
  C.sprite({g:"h2",n:"h3",x:0,y:0,w:50,h:50,z:25,css:"y c"});
  C.group({g:"h2",n:"h4",w:50,h:50,z:25});
  C.group({g:"h4",n:"h5",w:50,h:50,x:25,y:25,rz:B_angle});
  C.plane({g:"h5",x:25,y:15,z:27,w:30,h:15,rx:-20,css:"eyes e",H:"👀"});
  C.plane({g:"h5",x:25,y:53,z:3,w:13,h:20,rx:180,css:"tongue",H:"Y"});
  
  // Snake's body
  hp = S[0];
  C.group({g:"pf",n:"sb"});
  for(i = 1; i < snake_length * 5 + 1; i++){
    C.plane({g:"sb",n:"body" + (snake_length * 5 - i),x:(hp[0] - i/5)*50+25,y:hp[1]*50+25,w:30,h:30,z:25,rx:-45,ry:5,css:"body c " + (i%2 ? "odd" : ""),i:"afterBegin"});
    S.unshift([hp[0]-i/5, hp[1], 0]);
  }
  
  // Flowers
  if(W == -3){
    for(i = 0; i < 15; i++){
      x = ~~(Math.random() * 15) - 6;
      Y = ~~(Math.random() * 15) - 6;
      if(!flowers.find(a => a[0] > x-2 && a[0] < x+2 && a[1] > y-2 && a[1] < Y+2) && (Y < -3 || Y > 3)){
        flowers.push([x,Y]);
        //console.log(x, y);
        C.plane({g:"pf",w:40,h:34,z:5,x:x*50,y:Y*50,z:2,rx:0,o:"bottom",css:"e flower",H:"🌼"});
      }
    }
  }
  
  // Stars
  C.plane({w:5000,h:3000,x:-1000,z:1000,rx:45,css:"s",H:svg[0]});
  C.plane({x:-100,y:W<-3?500:0,z:W<-3?2000:900,rx:45,rz:-70,sx:2,sy:2,sz:2,css:"e moon",H:"🌙"});

  //console.log(y);
  
  // Move right 7 times (world 1) / 10 times (world 4)
  for(i = 0; i < (7 + ((W == -3) ? 0 : 3)); i++){
    setTimeout(()=>{r=1;a=0;move_snake(b);r=0;}, 300 + i * 250);
  }
    
  // Animation (world 1):
  if(W == -3){
    
    // Sign
    C.plane({x:300,y:220,w:5,h:105,z:55,rx:-90,ry:-35,css:"sign"});
    C.plane({x:300,y:221,w:100,h:60,z:72,rx:-90,ry:-35,css:"sign",H:"SALE<p><span class=e>🪙</span> x 100"});
    
    // Look up
    setTimeout(()=>C.move({n:"h4",z:28,ry:-45}), 3000);
    setTimeout(()=>C.c({rx:120, z:-100,y:-300}),3500);
    
    // js13k presents
    setTimeout(()=>e.style.opacity = 1, 6000);
    setTimeout(()=>e.style.opacity = 0, 9000);
    
    // Look down
    setTimeout(()=>{
      C.c({x:-200,y:50,z:-200,rx:50,rz:30});
      C.plane({w:1000,h:1000,x:397,y:145,z:72,H:svg[1],rx:-90,ry:-22,sx:.4,sy:.45,sz:.4,css:"t"});
    }, 10200);
    
    setTimeout(()=>{
      C.move({n:"h4",ry:0})
    }, 14000);
    
    // Move right
    setTimeout(()=>{r=1;a=0;move_snake(b);r=0}, 15500);
    setTimeout(()=>{r=1;a=0;move_snake(b);r=0}, 15700);
    
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
      C.c({x:450,y:-70,z:-100,rx:60,rz:-20});
    }, 18500);
    
    // Show sign
    setTimeout(()=>{
      C.c({x:370,y:0,z:-400,rx:60,rz:-40});
    }, 23500);
    
    // Fade out
    setTimeout(()=>{
      W= 1;
      p = 1;
      fadeout("<h1>LOSSST</h1>A Snake in Space");
    }, 30000);
    
    setTimeout(()=>{
      clearInterval(I);
      song = 1;
      note = 75;
    }, 33000);
  }
  
  // World 4
  else {
    C.plane({n:"rocket",w:1000,h:1000,x:-150,y:200,z:72,H:svg[1],rx:-90,sx:.4,sy:.45,sz:.4,css:"t"});
    
    // Remove snake
    // Play sound
    // Move rocket
    // Look up
    setTimeout(()=>{
      pf.remove();
      play_sound(brrr_sound);
      C.move({n:"rocket",y: -1000, z: 4000});
      C.c({rx: 140, y: -1000});
    
    }, 4000);
    
    setTimeout(()=>{
      W= 4;
      p = 1;
      fadeout();
    }, 10000);
    
    setTimeout(()=>{
      clearInterval(I);
      song = 9;
      note = 0;
    }, 10500);
  }
  
};

cont = () => {
  
  if(coins > 164) location = "//xem.github.io/js13k21/HARD";
  //W= p = 1;
  var i,j;
  if(save[1][1]){
    for(i = 1; i < 5; i++){
      for(j = 1; j < data[i].length; j++){
        if(!save[i][j]) {
          W=i;
          p=j;
          lW=9;
          return;
        }
      }
    }
  }
  else{
    W= -3;
    p = 0;
  }
}