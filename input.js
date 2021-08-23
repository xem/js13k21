// Inputs globals
pointer_down = 0;
pointer_start_x = 0;
pointer_start_y = 0;
pointer_mode = null;
halt = 0;

// Pointer down (mouse or finger)
onmousedown = ontouchstart = e => {
  
  if(world == 0 || level == 0 || puzzle == 0) return;
  
  // Tactile devices: consider the first finger only
  if(e.touches) e = e.touches[0];
  
  // Set down flag
  pointer_down = 1;
  
  // Save snake position
  pointer_start_x = e.pageX;
  pointer_start_y = e.pageY;
  
  // If the snake's head is pointed: prepare to move it
  if(e.target == headcircle){
    pointer_mode = "move";
    
    // Save head coordinates
    head_position = snake_position[snake_position.length - 1];
  }
  
  // Else: prepare to rotate the camera
  else {
    pointer_mode = "cam";
    b.classList.add("instant");
  }
}

// Pointer up
ontouchend = onmouseup = e => {
  
  if(world == 0 || level == 0 || puzzle == 0) return;
  
  // Clear down flag
  pointer_down = 0;
  
  // Stop moving snake/rotating camera
  pointer_mode = null;
  
  b.classList.remove("instant");
}

// Pointer move
onmousemove = ontouchmove = e => {
  
  if(world == 0 || level == 0 || puzzle == 0) return;
  
  var real_target, dx, dy;
  
  // When we're in-game (not in menu), prevent native scroll/reload on mobile
  if(world && level && puzzle){
    e.preventDefault();
  }
  
  // Tactile device: consider the first finger only
  if(e.touches) e = e.touches[0];
  
  // Mode "camera rotation"
  if(pointer_mode == "cam"){
    
    // Find cursor delta X/Y since pointer down or last pointer move
    dx = pointer_start_x - e.pageX;
    dy = pointer_start_y - e.pageY;
    
    // Rotate around X axis according to delta Y
    camrx += dy / 10;
    
    // Clamp X angle between 10 and 40
    if(camrx < (behind ? -10 : 20)) camrx = (behind ? -10 : 20);
    if(camrx > (high ? 70 : 45)) camrx = (high ? 70 : 45);
    
    // Rotate around Z axis according to delta X
    camrz += dx / 10;
    
    // Clamp Z angle batween -45 and 45
    if(camrz < -45) camrz = -45;
    if(camrz > 45) camrz = 45;
    
    // Re-set last pointer position to the current ones
    pointer_start_x = e.pageX;
    pointer_start_y = e.pageY;
    
    // Rotate camera
    C.camera({rx:camrx,rz:camrz}) 
  }
  
  // Mode "move snake"
  else if(pointer_mode == "move" && !halt){

    // Find which HTML element is actually under the pointer at any moment
    // (warning: e.target only contains the element touched before moving the cursor, so it's not useful here)
    real_target = document.elementFromPoint(e.clientX, e.clientY);
  
    // Handle snake movement & collisions
    move_snake(real_target);
  }
}

// Keyboard (arrows / WASD / ZQSD) to move the snake
// From https://xem.github.io/articles/jsgamesinputs.html
u = r = d = l = 0;
onkeydown = onkeyup = e => {
  this['lurd************************l**r************l*d***u**u'[e.which - 37]] = e.type[5];
}

setInterval(() => {
  if(!halt) move_snake(b); // use the top element "b" as dummy target
},33);

