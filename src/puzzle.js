// Draw current puzzle
draw_p = () => {
  
  if(W== 1){
    if(p > 30){
      set_song(3)
    }
    
    else if(p > 15){
      set_song(2)
    }
    
    else {
      set_song(1)
    }
  }
  else if(W== 2){
    if(p > 15){
      set_song(5)
    }
    
    else {
      set_song(4);
    }
  }
  else if(W== 3){
    if(p > 30){
      set_song(8)
    }
    
    else if(p > 15){
      set_song(7)
    }
    
    else {
      set_song(6)
    }
  }
  else if(W== 4){
    if(p > 15){
      set_song(10)
    }
    
    else {
      set_song(9)
    }
  }
  
  if(custom){
    song = ~~(Math.random()*10) + 1;
    note = 0;
  }
  //console.log(custom);
  // Keep track of current world/puzzle for easter-eggs
  lW = W;
  lp = p;
  
  if(p && !custom) pn.innerHTML = W + " - " + p;
  if(coins && !custom) t.innerHTML = "<span class=e>🪙</span> x " + coins;
  
  // Puzzle
  current_p = custom || data[W][p];
  //console.log(current_p);
  
  //if(p > 5 && !(location.host.includes("s13k") || location.host.includes("calh")  || location.host.includes("xem.github.io"))){
  //  location = "//xem.github.io/js13k21";
  //}
  
  w = current_p[2];
  h = current_p[3] || w;
  floor = current_p[0];
  wall = current_p[1];
  bricks = current_p[6] || [];
  portals1 = current_p[7] || 0;
  portals2 = current_p[8] || 0;
  mirror = current_p[9] || 0;
  if(portals1 && !portals1[0][2]) portals1[0][2] = 0;
  if(portals1 && !portals1[0][1]) portals1[0][1] = 0;
  if(portals1 && !portals1[1][2]) portals1[1][2] = 0;
  if(portals1 && !portals1[1][1]) portals1[1][1] = 0;
  if(portals2 && !portals2[0][2]) portals2[0][2] = 0;
  if(portals2 && !portals2[0][1]) portals2[0][1] = 0;
  if(portals2 && !portals2[1][2]) portals2[1][2] = 0;
  if(portals2 && !portals2[1][1]) portals2[1][1] = 0;
  //console.log(mirror);

  // Snake globals
  snake_length = current_p[4]-1; // without B  
  par = current_p[5];
  S = [[-3,2,0]];
  hp = [];
  B_angles = [270];
  B_angles_modulo = [270];
  B_portal = [0];
  B_angle = 270;
  B_angle_modulo = 270;
  body_moves = 0;
  on_wall = 0;
  high = 0;
  behind = 0;
  trees = [];
  flowers = [];
  animals = [];
  a = 0;
  win = 0;
  steps = 0;
  mirroring = 0;
  
  var i, j, x, y, hp, scale;

  // UI
  C.R();
  
  // s
  rx = (W==2&&p==30)?50:30;
  rz = 0;
  b.classList.remove("z");
  b.classList.remove("win");
  
  C.c({z:-100+w*50+mirror*100-(O?0:200),x:-150,y:h*10,rx:rx,rz:rz});
  
  // Fade in
  setTimeout(()=>{b.classList.add("f");},1500);
  setTimeout(()=>{fade.style.display = "none";},2000);
  
  // Puzzle
  C.plane({n:"fd",w:1500,h:1500,css:"r c"});
  setTimeout(()=>{fd.style.height = '1450px'},500); // Fx fix
  
  C.group({n:"pf",w:w*50,h:((floor || W > 3) ? h : 1)*50,z:2});
  C.group({n:"pw",w:w*50,h:h*50,y:-((floor || W > 3) ? h : 1)*50/2,z:2,rx:-90,o:"bottom"});
  
  // World 4
  if(W == 4){
    
    // Stars
    C.plane({w:5000,h:3000,x:500,y:-500,z:500,rx:45,css:"s",H:svg[0]});
    
    // Rocket
    if(p == 1){
      C.plane({w:1000,h:1000,x:-200,y:-350,z:72,H:svg[1],rx:-90,sx:.3,sy:.3,sz:.3,css:"t"});
      C.plane({w:1000,h:1000,x:-237,y:-395,z:3,H:svg[1],rx:356,ry:0,rz:319,sx:.3,sy:.35,sz:.3,css:"t w"});
    }
    
    // Craters
    for(i = 0; i < (p == 1 ? 2: 3); i++){
      C.plane({g:"pf",x:(1.5-i)*300+Math.random()*50,y:-300+Math.random()*200,w:scale=100+Math.random()*100,h:scale,css:"a"});
      C.plane({g:"pf",x:(1.5-i)*300+Math.random()*50,y:400+Math.random()*200,w:scale=100+Math.random()*100,h:scale,css:"a"});
    }
  }
  
  
  if(mirror){
    C.cube({g:"pf",n:"wrap",w:w*50,h:h*50,d:h*50,x:w*50/2,y:h*50/2 + (W > 3 ? 2 : 0)});
  }
  
  if(floor){
    for(j = h; j--;){
      for(i = w; i--;){
        C.plane({g:"pf",n:"tile_"+i+"_"+j,x:25+i*50,y:25+j*50,w:52,h:52,css:"v "+(((floor[j]>>i)&1) ? "k" : "")});
      }
    }
  }
  
  if(wall){
    C.cube({g:"pf",w:w*50+4,h:h*50+2,d:6,x:w*50/2,y:-3.1,z:2,css:"wall"});
    for(j = h; j--;){
      for(i = w; i--;){
        C.plane({g:"pw",n:"wall_tile_"+i+"_"+j,x:25+i*50,y:25+j*50,w:52,h:52,css:"v wt "+(((wall[j]>>i)&1) ? "k" : "")});
      }
    }
  }
  
  // Snake's head
  C.group({g:"pf",n:"y",x:S[0][0]*50+25,y:S[0][1]*50+25,z:4});
  C.group({g:"y",n:"h2"})
  C.sprite({g:"h2",n:"h3",x:0,y:0,w:50,h:50,z:25,css:"y c"});
  C.group({g:"h2",n:"h4",w:50,h:50,z:25});
  C.group({g:"h4",n:"h5",w:50,h:50,x:25,y:25,rz:B_angle});
  C.group({g:"h5",n:"h6",w:50,h:50,x:25,y:25});
  C.plane({g:"h6",x:25,y:15,z:27,w:30,h:15,rx:-20,css:"eyes e",H:[,"👀","🕶️","🥽","👀"][W]});
  C.plane({g:"h6",x:25,y:53,z:3,w:13,h:20,rx:180,css:"tongue",H:"Y"});
  
  // Snake's body
  hp = S[0];
  C.group({g:"pf",n:"sb"});
  for(i = 1; i < snake_length * 5 + 1; i++){
    C.plane({g:"sb",n:"body" + (snake_length * 5 - i),x:(hp[0] - i/5)*50+25,y:hp[1]*50+25,w:30,h:30,z:25,rx:-45,ry:5,css:"body c " + (i%2 ? "odd" : ""),i:"afterBegin"});
    S.unshift([hp[0]-i/5, hp[1], 0]);
  }
  
  // Trees
  if(W < 4) {
    for(i = 0; i < 10; i++){
      x = (Math.random() * 14).toFixed(1) - 5;
      y = (Math.random() * 18).toFixed(1) - 6;
      if((y < -3 || y > h+3) && (x < w || x > w + 3)){
        if(!trees.find(a => a[0] > (~~x)-4 && a[0] < (~~x)+4 && a[1] > (~~y)-3 && a[1] < (~~y)+2)){
          trees.push([~~x,~~y]);
          C.sprite({g:"pf",x:x*50+10,y:y*50+15,z:5,w:65,h:75,sx:1.8,sy:1.8,sz:1.8,css:"tree e",H:[,"🌳","🌵","🌲",""][W],o:"bottom center"});
          C.plane({g:"pf",x:x*50+10,y:y*50+15,z:2,rz:(W==1?280:311),w:65,h:75,sx:1.8,sy:2.5,sz:1.8,css:"tree w e",H:[,"🌳","🌵","🌲",""][W],o:"bottom center"});
        }
      }
    }
    
    // Flowers / Rocks / ice
    for(i = 0; i < (W == 3 ? 30 : 10); i++){
      x = (Math.random() * 14).toFixed(1) - 5;
      y = (Math.random() * 10).toFixed(1) - 5;
      if(!(x > -9 && x < w+1 && y > -2 && y < h+1)){
        if(!flowers.find(a => a[0] > (~~x)-2 && a[0] < (~~x)+2 && a[1] > (~~y)-2 && a[1] < (~~y)+2) && (y < 2 || y > 4) && !trees.find(a => a[0] > (~~x)-2 && a[0] < (~~x)+2 && a[1] > (~~y)-2 && a[1] < (~~y)+2)){
          flowers.push([~~x,~~y]);
          C.plane({g:"pf",w:45,h:W==1?34:42,z:5,x:x*50,y:y*50,z:2,rx:0,o:"bottom",css:"e flower",H:[,"🌼","🪨","❄️",""][W]});
        }
      }
    }
  
    // Animal
    x = ~~(Math.random() * 15) - 6;
    y = ~~(Math.random() * 15) - 6;
    if(!(x > -9 && x < w+4 && y > -2 && y < h+2)){
      if((y < 2 || y > 4) && !trees.find(a => a[0] > x-2 && a[0] < x+2 && a[1] > y-2 && a[1] < y+2)){
        animals=[[
        
          ,
          
          // World 1
          [x,y,[..."🐒🦆🦉🐢🐖🐏🐑🐕🐈🐓🦢🐿"][~~(Math.random() * 12)]],
          
          // World 2
          [x,y,[..."🐪🐫🦒🦘"][~~(Math.random() * 4)]],
          
          // World 3
          [x,y,[..."⛄️🐧🦭🎁"][~~(Math.random() * 4)]],
          
          // World 4
          [x,y,""],
          
        ][W]];
        scale = [,1.5,1.8,1.8][W];
        C.plane({g:"pf",w:50,h:55,z:8,x:x*50+20,y:y*50+15,z:3,rx:-50,sx:scale,sy:scale,sz:scale,o:"bottom",css:"e animal",H:"<div>"+animals[0][2]});
        C.plane({g:"pf",x:x*50+20,y:y*50-10,z:1,rz:350,w:50,h:55,css:"e animal w",H:animals[0][2],sx:scale,sy:scale,sz:scale,o:"bottom center"});
      }
    }
  }
  
  // Bricks
  for(i of bricks){
    if(!i[1])i[1]=0;
    if(!i[2])i[2]=0;
    C.cube({g:"pf",x:i[0]*50+25,y:i[1]*50+24,z:(i[2]||0)*50-(W<4 ? 17 : 0),w:50,h:50,d:50,css:"cube bricks",H:(i[1]%2)?(svg[2]+svg[3]+svg[2]):(svg[3]+svg[2]+svg[3]),Hside:((i[1]+i[2])%2)?(svg[3]+svg[2]+svg[3]):(svg[2]+svg[3]+svg[2])});
  }
  
  // Portals 1
  if(portals1){
    for(i of portals1){
      // Ground
      if(!i[2] && floor){
        C.plane({g:"pf",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:25+i[1]*50,z:1,w:52,h:52,css:"v portal1"});
      }
      // Wall
      else {
        C.plane({g:"pf",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:1,z:25+i[2]*50,w:52,h:52,rx:90,css:"v portal1"});
      }
    }
  }
  
  // Portals 2
  if(portals2){
    for(i of portals2){
      // Ground
      if(i[2] == 0 && floor){
        C.plane({g:"pf",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:25+i[1]*50,z:1,w:52,h:52,css:"v portal2"});
      }
      // Wall
      else {
        C.plane({g:"pf",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:1,z:25+i[2]*50,w:52,h:52,rx:90,css:"v portal2"});
      }
    }
  }
  
  // PAR sign
  C.plane({g:"pf",x:w*50+105-55,y:-50+60,w:5,h:105,z:50,rx:-65,ry:-35,css:"sign"});
  C.plane({g:"pf",x:w*50+100-55,y:17,w:5,h:30,z:2,rx:0,ry:0,rz:-23,css:"sign w"});
  C.plane({g:"pf",x:w*50+105-55,y:-47+60,w:90,h:49,z:84,rx:-65,ry:-15,css:"sign",H:"Steps: <span id=st>0</span><br>Par: "+[par||"?"]});
  C.plane({g:"pf",x:w*50+78-54,y:-112+89,w:60,h:60,z:2,rx:0,ry:0,rz:-20,css:"sign w"});
};

check_p = () => {
  if(W < 1) return;
  var x, y, val, snake_on_current_cell;
  win = 1;
  var current_positions = S.slice(-(snake_length + 1) * 5);
  if(W == 4){
    if(!current_positions.every(a => a[0] > -1 && a[0] < w && a[1] > -1 && a[1] < h && a[2] < h)){
      win = 0;
    }
  }
  if(floor){
    for(y = 0; y < (floor ? h : 1); y++){
      for(x = 0; x < w; x++){
        val = (floor[y]>>x)&1;
        snake_on_current_cell = current_positions.find(a => a[0] == x && a[1] == y && a[2] >= 0);
      
        // Not ok if there's a snake body part on a white cell
        if(val == 0){
          if(snake_on_current_cell){
            win = 0;
            C.$("tile_"+x+"_"+y).classList.add("red");
          }
          else {
            C.$("tile_"+x+"_"+y).classList.remove("red");
          }
        }
        
        // Not ok if there's no snake body part on a black cell
        if(val == 1){
          if(!snake_on_current_cell){
            win = 0;
            C.$("tile_"+x+"_"+y).classList.remove("blue");
          }
          else {
            C.$("tile_"+x+"_"+y).classList.add("blue");
          }
        }
      }
    }
  }
  
  if(wall){
    for(y = 0; y < h; y++){
      for(x = 0; x < w; x++){
        val = (wall[y]>>x)&1
        snake_on_current_cell = current_positions.find(a => a[0] == x && a[1] >= 0 && a[1] < ((W > 3 || floor) ? h : 1) && a[2] == h - y - 1);
        
        // Not ok if there's a snake body part on a white cell
        if(val == 0){
          if(snake_on_current_cell){
            win = 0;
            C.$("wall_tile_"+x+"_"+y).classList.add("red");
          }
          else {
            C.$("wall_tile_"+x+"_"+y).classList.remove("red");
          }
        }
        
        // Not ok if there's no snake body part on a black cell
        if(val == 1){
          if(!snake_on_current_cell){
            win = 0;
            C.$("wall_tile_"+x+"_"+y).classList.remove("blue");
          }
          else {
            C.$("wall_tile_"+x+"_"+y).classList.add("blue");
          }
        }
      }
    }
  }
  if(win && !awin){
    if(custom){
      W = 0;
      p = 0;
    }
    else {
      if(!save[W][p] && !custom) { save[W][p] = steps; coins++ }
      else if(save[W][p] > steps) { save[W][p] = steps }
      localStorage["lossst"]=JSON.stringify(save);
      p++;
      if(p >= data[W].length){
        if(
          (W == 1 && coins >24)
          || (W == 2 && coins >49)
          || (W == 3 && coins > 99)
        ){
          W++;
          p = 1;
        }
        else {
          W = -1;
          p = 0;
        }
        
        if(lW== 3 && W == 4){
          if(coins > 99) W = -4; 
          else W = -1;
          p = 0
        }
        if(W == 5){
          W = -1;
          p = 0;
        }
        t.innerHTML = "<span class=e>🪙</span> x " + coins;
      }
    }
    awin = 1;
    b.classList.add("win");
    setTimeout(()=>{
      C.plane({g:"pf",n:"coin",x:(n||hp)[0]*50+25,y:y=(n||hp)[1]*50+25,z:(n||hp)[2]*50+45,w:50,h:50,rx:high?-90:-45,H:"🪙",css:"e coin",sx:.5,sy:.5,sz:.5});
    },200);
    setTimeout(()=>{
      C.move({n:"coin",y:y+50, z:hp[2]*50+200,sx:1.5,sy:1.5,sz:1.5,ry:1080});
    },300);
    setTimeout(()=>{
      play_sound(coin_sound);
      awin = 0;
    },600);
    setTimeout(()=>{clearInterval(I); I = setInterval(play_next_note,300)},300);
    setTimeout((custom ? () => {coin.style.opacity = 0} : fadeout),2000);
  }
  
}