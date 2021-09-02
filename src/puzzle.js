// Draw current puzzle
draw_puzzle = () => {
  
  console.log(custom);
  
  song = 7;
  
  if(puzzle && !custom) puzzlename.innerHTML = world + " - " + puzzle;
  if(coins && !custom) coincount.innerHTML = "<span class=emoji>🪙</span> x " + coins;
  
  // Puzzle
  current_puzzle = custom || data[world][puzzle];
  //console.log(current_puzzle);
  
  w = current_puzzle[2];
  h = current_puzzle[3] || w;
  floor = current_puzzle[0];
  wall = current_puzzle[1];
  bricks = current_puzzle[6] || [];
  portals1 = current_puzzle[7] || 0;
  portals2 = current_puzzle[8] || 0;
  mirror = current_puzzle[9];
  //console.log(mirror);

  // Snake globals
  snake_length = current_puzzle[4]-1; // without head  
  snake_position = [[-3,2,0]];
  head_position = [];
  head_angles = [270];
  head_angles_modulo = [270];
  head_portal = [0];
  head_angle = 270;
  head_angle_modulo = 270;
  body_moves = 0;
  on_wall = 0;
  high = 0;
  behind = 0;
  trees = [];
  flowers = [];
  animals = [];
  halt = 0;
  win = 0;
  steps = 0;
  mirroring = 0;
  
  var i, j, x, y, head_position, scale;

  // UI
  C.reset();
  
  // Scene
  camrx = (world==2&&puzzle==30)?50:30;
  camrz = 0;
  b.classList.remove("menu");
  b.classList.remove("win");
  
  C.camera({z:-300+w*50+mirror*100,x:-150,y:h*10,rx:camrx,rz:camrz});
  
  // Remove menu class from body
  setTimeout(()=>{b.classList.add("fadein")},1000);
  setTimeout(()=>{fade.style.display = "none"},1500);
  
  // Puzzle
  C.plane({n:"floordiv",w:1500,h:1500,css:"floor circle"});
  setTimeout(()=>{floordiv.style.height = '1450px'},500); // Fx fix
  
  C.group({n:"puzzlefloor",w:w*50,h:(floor ? h : 1)*50,z:2});
  C.group({n:"puzzlewall",w:w*50,h:h*50,y:-(floor ? h : 1)*50/2,z:2,rx:-90,o:"bottom"});
  
  if(mirror){
    C.cube({g:"puzzlefloor",n:"wrap",w:w*50,h:h*50,d:h*50,x:w*50/2,y:h*50/2});
  }
  
  if(floor){
    for(j = (floor ? h : 1); j--;){
      for(i = w; i--;){
        C.plane({g:"puzzlefloor",n:"tile_"+i+"_"+j,x:25+i*50,y:25+j*50,w:52,h:52,css:"tile "+(((floor[j]>>i)&1) ? "black" : "")});
      }
    }
  }
  
  if(wall){
    C.cube({g:"puzzlefloor",w:w*50+4,h:h*50+2,d:4,x:w*50/2,y:-2.1,z:2,css:"wall"});
    for(j = h; j--;){
      for(i = w; i--;){
        C.plane({g:"puzzlewall",n:"wall_tile_"+i+"_"+j,x:25+i*50,y:25+j*50,w:52,h:52,css:"tile wall_tile "+(((wall[j]>>i)&1) ? "black" : "")});
      }
    }
  }
  
  console.log(world);
  // Snake's head
  C.group({g:"puzzlefloor",n:"head",x:snake_position[0][0]*50+25,y:snake_position[0][1]*50+25,z:4});
  C.group({g:"head",n:"head_scale"})
  C.sprite({g:"head_scale",n:"head_circle",x:0,y:0,w:50,h:50,z:25,css:"head circle"});
  C.group({g:"head_scale",n:"head_decoration",w:50,h:50,z:25});
  C.group({g:"head_decoration",n:"head_decoration_inner",w:50,h:50,x:25,y:25,rz:head_angle});
  C.plane({g:"head_decoration_inner",x:25,y:15,z:27,w:30,h:15,rx:-20,css:"eyes emoji",html:[,"👀","🕶️","🥽"][world]});
  C.plane({g:"head_decoration_inner",x:25,y:53,z:3,w:13,h:20,rx:180,css:"tongue",html:"Y"});
  
  // Snake's body
  head_position = snake_position[0];
  C.group({g:"puzzlefloor",n:"snakebody"});
  for(i = 1; i < snake_length * 5 + 1; i++){
    C.plane({g:"snakebody",n:"body" + (snake_length * 5 - i),x:(head_position[0] - i/5)*50+25,y:head_position[1]*50+25,w:30,h:30,z:25,rx:-45,ry:5,css:"body circle " + (i%2 ? "odd" : ""),i:"afterBegin"});
    snake_position.unshift([head_position[0]-i/5, head_position[1], 0]);
  }
  
  // Trees
  for(i = 0; i < 4; i++){
    x = ~~(Math.random() * 14) - 5;
    y = ~~(Math.random() * 10) - 5;
    if(!(x > -9 && x < w+3 && y > -3 && y < h+3) && (y < 2 || y > 4)){
      if(!trees.find(a => (a[0] > x-3 && a[0] < x+3) || (a[1] > y-3 && a[1] < y+3))){
        trees.push([x,y]);
        C.sprite({g:"puzzlefloor",x:x*50-20,y:y*50,z:5,w:65,h:75,sx:1.8,sy:1.8,sz:1.8,css:"tree emoji",html:[,"🌳","🌵","🌲"][world],o:"bottom center"});
        C.plane({g:"puzzlefloor",x:x*50-20,y:y*50,z:2,rz:(world==1?280:311),w:65,h:75,sx:1.8,sy:2.5,sz:1.8,css:"tree shadow emoji",html:[,"🌳","🌵","🌲"][world],o:"bottom center"});
      }
    }
  }
  
  // Flowers / Rocks / ice
  for(i = 0; i < (world == 3 ? 30 : 10); i++){
    x = ((Math.random() * 14) - 5).toFixed(1);
    y = ((Math.random() * 10) - 5).toFixed(1);
    if(!(x > -9 && x < w+2 && y > -2 && y < h+2)){
      if(!flowers.find(a => a[0] > (~~x)-2 && a[0] < (~~x)+2 && a[1] > (~~y)-2 && a[1] < (~~y)+2) && (y < 2 || y > 4) && !trees.find(a => a[0] > (~~x)-2 && a[0] < (~~x)+2 && a[1] > (~~y)-2 && a[1] < (~~y)+2)){
        flowers.push([~~x,~~y]);
        C.plane({g:"puzzlefloor",w:45,h:world==1?34:42,z:5,x:x*50,y:y*50,z:1,rx:0,o:"bottom",css:"emoji flower",html:[,"🌼","🪨","❄️"][world]});
      }
    }
  }
  
  // Animal
  x = ~~(Math.random() * 15) - 6;
  y = ~~(Math.random() * 15) - 6;
  if(!(x > -9 && x < w+2 && y > -2 && y < h+2)){
    if((y < 2 || y > 4) && !trees.find(a => a[0] > x-2 && a[0] < x+2 && a[1] > y-2 && a[1] < y+2)){
      animals=[[
      
        ,
        
        // World 1
        [x,y,[..."🐒🦆🦉🐢🐖🐏🐑🐕🐈🐓🦢🐿"][~~(Math.random() * 12)]],
        
        // World 2
        [x,y,[..."🐪🐫🦒🦘"][~~(Math.random() * 4)]],
        
        // World 3
        [x,y,[..."⛄️🐧🦭🎁"][~~(Math.random() * 4)]],
        
      ][world]];
      scale = [,1.5,1.8][world];
      C.sprite({g:"puzzlefloor",w:50,h:55,z:8,x:x*50+20,y:y*50+15,z:3,rx:0,sx:scale,sy:scale,sz:scale,o:"bottom",css:"emoji animal",html:animals[0][2]});
      C.plane({g:"puzzlefloor",x:x*50+20,y:y*50-10,z:1,rz:350,w:50,h:55,css:"emoji animal shadow",html:animals[0][2],sx:scale,sy:scale,sz:scale,o:"bottom center"});
    }
  }
  
  // Bricks
  for(i of bricks){
    C.cube({g:"puzzlefloor",x:i[0]*50+25,y:i[1]*50+25,z:(i[2]||0)*50-(i[2] ? 0 : 17),w:50,h:50,d:50,css:"cube bricks",html:(i[1]%2)?(svg[9]+svg[10]+svg[9]):(svg[10]+svg[9]+svg[10]),htmlside:((i[1]+i[2])%2)?(svg[10]+svg[9]+svg[10]):(svg[9]+svg[10]+svg[9])});
  }
  
  // Portals 1
  if(portals1){
    for(i of portals1){
      // Ground
      if(i[2] == 0 && floor){
        C.plane({g:"puzzlefloor",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:25+i[1]*50,z:1,w:52,h:52,css:"tile portal1"});
      }
      // Wall
      else {
        C.plane({g:"puzzlefloor",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:1,z:25+i[2]*50,w:52,h:52,rx:90,css:"tile portal1"});
      }
    }
  }
  
  // Portals 2
  if(portals2){
    for(i of portals2){
      // Ground
      if(i[2] == 0 && floor){
        C.plane({g:"puzzlefloor",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:25+i[1]*50,z:1,w:52,h:52,css:"tile portal2"});
      }
      // Wall
      else {
        C.plane({g:"puzzlefloor",n:"tile_"+i+"_"+j,x:25+i[0]*50,y:1,z:25+i[2]*50,w:52,h:52,rx:90,css:"tile portal2"});
      }
    }
  }
};

check_puzzle = () => {
  if(world < 1) return;
  var x, y, val, snake_on_current_cell;
  win = 1;
  var current_positions = snake_position.slice(-(snake_length + 1) * 5);
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
        snake_on_current_cell = current_positions.find(a => a[0] == x && a[1] >= 0 && a[1] < (floor ? h : 1) && a[2] == h - y - 1);
        
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
  if(win && !haltwin){
    if(custom){
      world = 0;
      puzzle = 0;
      custom = 0;
      setTimeout(()=>{location.search = '';},1400);
    }
    else {
      coins++;
      puzzle++;
      if(puzzle >= data[world].length){
        world++;
        puzzle = 1;
        coincount.innerHTML = "<span class=emoji>🪙</span> x " + coins;
      }
    }
    haltwin = 1;
    b.classList.add("win");
    setTimeout(()=>{
      C.plane({g:"puzzlefloor",n:"coin",x:(next_target||head_position)[0]*50+25,y:y=(next_target||head_position)[1]*50+15,z:(next_target||head_position)[2]*50+45,w:50,h:50,rx:high?-90:-45,html:"🪙",css:"emoji coin",sx:.5,sy:.5,sz:.5});
    },200);
    setTimeout(()=>{
      C.move({n:"coin",y:y+50, z:head_position[2]*50+200,sx:1.5,sy:1.5,sz:1.5,ry:1080});
    },300);
    setTimeout(()=>{
      play_sound(coin_sound);
      haltwin = 0;
    },600);
    setTimeout(fadeout,2000);
  }
}