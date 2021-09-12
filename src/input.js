// Inputs globals
pd = 0;
px = 0;
py = 0;
a = 0;
pointer_mode = 0;

// Pointer down (mouse or finger)
onmousedown = ontouchstart = e => {
  
  if(p == 0) return;
  
  // Tactile devices: consider the first finger only
  if(e.touches) e = e.touches[0];
  
  // Set down flag
  pd = 1;
  
  // Save snake position
  px = e.pageX;
  py = e.pageY;

  // Ignore the D-pad
  if(e.target.tagName == "svg") return;
  if(e.target.id == "back") return;
  
  pointer_mode = "cam";

  // Else: prepare to rotate the c
  b.classList.add("i");
  //console.log(px,py);
}

// Pointer up
ontouchend = onmouseup = e => {
  
  if(p == 0) return;
  
  // Clear down flag
  pd = 0;
  
  // Stop moving snake/rotating c
  pointer_mode = null;
  
  b.classList.remove("i");
}

// Pointer move
onmousemove = ontouchmove = e => {
  
  if(p == 0) return;
  
  var real_target, dx, dy;
  
  // Tactile device: consider the first finger only
  if(e.touches) e = e.touches[0];

  // Mode "c rotation"
  if(pointer_mode == "cam"){
    
    // Find cursor delta X/Y since pointer down or last pointer move
    dx = px - e.pageX;
    dy = py - e.pageY;
    
    //console.log(px, e.pageX, py, e.pageY, dx, dy);
    
    // Rotate around X axis according to delta Y
    rx += dy / 10;
    
    //console.log(dx, dy);
    
    // Clamp X angle between 10 and 40
    if(rx < (behind ? -10 : 30)) rx = (behind ? -10 : 30);
    if(rx > (high ? 70 : 45)) rx = (high ? 70 : 45);
    
    // Rotate around Z axis according to delta X
    rz += dx / 10;
    
    // Clamp Z angle batween -45 and 45
    if(rz < -45) rz = -45;
    if(rz > 45) rz = 45;
    
    //console.log(dx, dy, rx, rz);
    
    // Re-set last pointer position to the current ones
    px = e.pageX;
    py = e.pageY;
    
    // Rotate c
    C.c({rx,rz}) 
  }
  
  try{e.preventDefault()}catch(e){}
}

oncontextmenu = () => { return false; }

// Keyboard (arrows / WASD / ZQSD) to move the snake
// From https://xem.github.io/articles/jsgamesinputs.H
cs = 1;
u = r = d = l = U = D = 0;
onkeydown = onkeyup = e => {
  if(cs && e.key == "n") { p++; fadeout(); cs = 0; setTimeout(()=> cs=1,500) }
  if(cs && e.key == "p") { p--; fadeout(); cs = 0; setTimeout(()=> cs=1,500) }
  if(cs && e.key == "r") { fadeout(); cs = 0; setTimeout(()=> cs=1,500) }
  this['lurd************************l*Dr************l*d***uU*u'[e.which - 37]] = e.type[5];
  if(S) move_snake();
}

setInterval(() => {
  if(W > 0 && S) move_snake();
},33);

onscroll = e => e.preventDefault();
