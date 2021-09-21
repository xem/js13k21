WI.onchange = WI.oninput = 
HE.onchange = HE.oninput =
onload = () => {
  checks();
  states = {};
  w = +WI.value;
  h = +HE.value;
  pf.style.width = pw.style.width = w * 50 + "px";
  pf.style.height = pw.style.height = h * 50 + "px";
  pf.innerHTML = pw.innerHTML = "";
  C.move({n:"pw",y:-h*50});
  
  for(i = 0; i < w; i++){
    for(j = 0; j < h; j++){
      C.plane({g:"pf",n:"tile_"+i+"_"+j,w:50,h:50,x:i*50+25,y:j*50+25,css:"v",H:svg[3]+svg[2]+svg[3]});
      states["tile_"+i+"_"+j] = 0;
      C.plane({g:"pw",n:"walltile_"+i+"_"+j,w:50,h:50,x:i*50+25,y:j*50+25,css:"v",H:svg[2]+svg[3]+svg[2]});
      states["walltile_"+i+"_"+j] = 0;
    }
  }
  
  wrap.remove();
  C.cube({n:"wrap",w:w*50,h:h*50,d:h*50,x:0,y:h-50/2+25});
}

checks = FLOOR.onchange = WALL.onchange = WRAP.onchange = () => {
  if(FLOOR.checked)b.classList.add("hasfloor");
  else b.classList.remove("hasfloor");
  
  if(WALL.checked)b.classList.add("haswall");
  else b.classList.remove("haswall");
  
  if(WRAP.checked)b.classList.add("haswrap");
  else b.classList.remove("haswrap");
}

// Draw screen (editor)
draw_screen = () => {
  
  // HTML string
  var i, j, html = "";
  b.classList.add("w1");
  w = W.value;
  h = H.value;
  
  // Scene
  rx = 45;
  rz = 0;
  
  C.c({z:-300+8*50,y:h*10,rx,rz});
  
  // Puzzle
  C.plane({n:"fd",w:1500,h:1500,css:"r c"});
  setTimeout(()=>{fd.style.height = '1450px'},500); // Fx fix
  
  C.group({n:"pf",x:0,y:0,w:w*50,h:h*50,z:2});
  C.group({n:"pw",x:0,y:0,w:50,h:50,y:-50/2,z:2,rx:-90,o:"bottom"});
  C.cube({n:"wrap",w:w*50,h:h*50,d:h*50,x:0,y:h-50/2+25});
}

onclick = e => {
  if(e.target.classList.contains("v")){
    states[e.target.id]++;
    states[e.target.id] %= 5;
    e.target.className = "v tile" + states[e.target.id];
  }
}

share = () => {
  current_puzzle = [
    ,               // floor*,
    ,               // wall*,
    w,              // width,
    h,              // height*,
    +SNAKE.value,   // snake_length,
    ,               // moves,
    [],             // bricks?,
    ,               // portals_1*,
    ,               // portals_2*
    +WRAP.checked,  // mirroring
    +wor.value       // world
  ];                

  
  if(FLOOR.checked){
    current_puzzle[0] = [];
    for(j = 0; j < h; j++){
      if(w < 7) current_puzzle[0][j] = 0b1000000;
      else current_puzzle[0][j] = 1 << (w+1);
      for(i = 0; i < w; i++){
        s = states["tile_"+i+"_"+j];
        if(s == 1 || s == 2 || s == 3){
          current_puzzle[0][j] += 1 << i;
        }
        if(s == 2) {
          if(current_puzzle[7] && current_puzzle[7].length == 1){
            current_puzzle[7].push([i,j,0]);
          }
          else {
            current_puzzle[7] = [[i,j,0]];
          }
        }
        if(s == 3) {
          if(current_puzzle[8] && current_puzzle[8].length == 1){
            current_puzzle[8].push([i,j,0]);
          }
          else if(!current_puzzle[8]){
            current_puzzle[8] = [[i,j,0]];
          }
        }
        if(s == 4){
          current_puzzle[6].push([i,j,0]);
        }
      }
    }
  }
  
  if(WALL.checked){
    current_puzzle[1] = [];
    for(j = 0; j < h; j++){
      if(w < 7) current_puzzle[1][j] = 0b1000000;
      else current_puzzle[1][j] = 1 << (w+1);
      for(i = 0; i < w; i++){
        s = states["walltile_"+i+"_"+j];
        if(s == 1 || s == 2 || s == 3){
          current_puzzle[1][j] += 1 << i;
        }
        if(s == 2) {
          if(current_puzzle[7] && current_puzzle[7].length == 1){
            current_puzzle[7].push([i,0,h-1-j]);
          }
          else if(!current_puzzle[7]) {
            current_puzzle[7] = [[i,0,h-1-j]];
          }
        }
        if(s == 3) {
          if(current_puzzle[8] && current_puzzle[8].length == 1){
            current_puzzle[8].push([i,0,h-1-j]);
          }
          else if(!current_puzzle[8]){
            current_puzzle[8] = [[i,0,h-1-j]];
          }
        }
        if(s == 4){
          current_puzzle[6].push([i,0,h-1-j]);
        }
      }
    }
  }
  console.log(current_puzzle);
  if(prompt("Your puzzle URL: (click OK to play it)", "//xem.github.io/js13k21/src/#" + JSON.stringify(current_puzzle).replace(/null/g,""))){
    window.open("../src/#"+JSON.stringify(current_puzzle).replace(/null/g,""));
  }
}

wor.onchange = wor.oninput = () => {
  b.classList.remove("w1");
  b.classList.remove("w2");
  b.classList.remove("w3");
  b.classList.remove("w4");
  b.classList.add("w" + wor.value);
}