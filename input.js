// Inputs globals
pointer_down = 0;
pointer_start_x = 0;
pointer_start_y = 0;
pointer_mode = null;
halt = 0;

// Snake globals
snake_position = [[0,0,0]];
head_angles = [0];
head_angles_modulo = [0];
head_angle = 0;
head_angle_modulo = 0;
snake_length = 4;

// Pointer down (mouse or finger)
onmousedown = ontouchstart = e => {
  
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
  }
  
  // Else: prepare to rotate the camera
  else {
    pointer_mode = "cam";
  }
}

// Pointer up
ontouchend = onmouseup = e => {
  
  // Clear down flag
  pointer_down = 0;
  
  // Stop moving snake/rotating camera
  pointer_mode = null;
}

// Pointer move
onmousemove = ontouchmove = e => {
  
  var i, current_position, target_position, offset, real_target, dx, dy;
  
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
    if(camrx < 10) camrx = 10;
    if(camrx > 40) camrx = 40;
    
    // Rotate around Z axis according to delta X
    camrz += dx / 10;
    
    // Clamp Z angle batween -45 and 45
    if(camrz < -45) camrz = -45;
    if(camrz > 45) camrz = 45;
    
    // Re-set last pointer position to the current ones
    pointer_start_x = e.pageX;
    pointer_start_y = e.pageY;
    
    // Rotate camera
    C.camera({rx:camrx, rz:camrz}) 
  }
  
  // Mode "move snake"
  else if(pointer_mode == "move" && !halt){

    // Find which HTML element is actually under the pointer at any moment
    // (warning: e.target only contains the element touched before moving the cursor, so it's not useful here)
    real_target = document.elementFromPoint(e.clientX, e.clientY);
  
    // The snake's head is surrounded by 4 invisible "trigger" divs
    // The real head angle can be any multiple of 90deg
    // For computations, there's also a "modulo" value clamped between 0 and 360
    
    // Get current head position
    current_position = snake_position[snake_position.length - 1];
    
    // As soon as the right trigger is touched
    if(real_target.id == "right"){
      
      // Next position
      target_position = [current_position[0] + 1, current_position[1], current_position[2]];
      
      // Backwards if going left
      if(head_angle_modulo == 90){
        go_back();
        return;
      }
      
      // No self collision
      if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
      
        // Rotate right if the snake's head is facing up
        if(head_angle_modulo == 180){ head_angle += 90; head_angle_modulo += 90; }
        
        // Rotate left if the snake's head is facing down
        else if(head_angle_modulo == 0){ head_angle -= 90; head_angle_modulo -= 90; }
        
        // Add new head position on the right + 5 intermediate for the body parts
        for(i = 1; i <= 5; i++){
          snake_position.push([current_position[0] + i/5, current_position[1], current_position[2]]);
          head_angles.push(head_angle);
        }
      }
      else return;
    }
    
    // As soon as the down trigger is touched
    else if(real_target.id == "down"){
      
      // Next position
      target_position = [current_position[0], current_position[1] + 1, current_position[2]];
      
      // Backwards if going up
      if(head_angle_modulo == 180){
        go_back();
        return;
      }
      
      // No self collision
      if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
      
        // Rotate right if the snake's head is facing right
        if(head_angle_modulo == 270){ head_angle += 90; head_angle_modulo += 90; }
        
        // Rotate left if the snake's head is facing left
        else if(head_angle_modulo == 90){ head_angle -= 90; head_angle_modulo -= 90; }
        
        // Add new head position on the down + 5 intermediate for the body parts
        for(i = 1; i <= 5; i++){
          snake_position.push([current_position[0], current_position[1] + i/5, current_position[2]]);
          head_angles.push(head_angle);
        }
      }
      else return;
    }
    
    // As soon as the left trigger is touched
    else if(real_target.id == "left"){
      
      // Next position
      target_position = [current_position[0] - 1, current_position[1], current_position[2]];
      
      // Backwards if going right
      if(head_angle_modulo == 270){
        go_back();
        return;
      }
      
      // No self collision
      if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
      
        // Rotate right if the snake's head is facing down
        if(head_angle_modulo == 0){ head_angle += 90; head_angle_modulo += 90; }
        
        // Rotate left if the snake's head is facing up
        else if(head_angle_modulo == 180){ head_angle -= 90; head_angle_modulo -= 90; }
        
        // Add new head position on the left + 5 intermediate for the body parts
        for(i = 1; i <= 5; i++){
          snake_position.push([current_position[0] - i/5, current_position[1], current_position[2]]);
          head_angles.push(head_angle);
        }
      }
      else return;
    }
    
    // As soon as the up trigger is touched
    else if(real_target.id == "up"){
      
      // Next position
      target_position = [current_position[0], current_position[1] - 1, current_position[2]];
      
      // Backwards if going down
      if(head_angle_modulo == 0){
        go_back();
        return;
      }
      
      // No self collision
      if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
        
        // Rotate right if the snake's head is facing left
        if(head_angle_modulo == 90){ head_angle += 90; head_angle_modulo += 90; }
        
        // Rotate left if the snake's head is facing right
        else if(head_angle_modulo == 270){ head_angle -= 90; head_angle_modulo -= 90; }
        
        // Add new head position on the up + 5 intermediate for the body parts
        for(i = 1; i <= 5; i++){
          snake_position.push([current_position[0], current_position[1] - i/5, current_position[2]]);
          head_angles.push(head_angle);
        }
      }
      else return;
    }
    else return;

    // Clamp modulo angle between 0 and 360
    head_angle_modulo = (head_angle_modulo + 360) % 360;
    for(i = 1; i <= 5; i++){
      head_angles_modulo.push(head_angle_modulo);
    }
    
    // Move whole head
    current_position = snake_position[snake_position.length - 1];
    C.move({n:"head", x:current_position[0]*50, y:current_position[1]*50, z:current_position[2]*50+4});
    
    // Make the body parts advance 5 steps
    move_body();
    setTimeout(move_body, 40);
    setTimeout(move_body, 80);
    setTimeout(move_body, 120);
    setTimeout(move_body, 160);
    
    // Rotate head's decoration (eyes, tongue, but not the circle itself, because it's a sprite)
    C.move({n:"head_decoration", rz:head_angle});
    
    // Block snake moves for 100ms
    halt = 1;
    setTimeout(()=>{
      halt = 0
    }, 200);
    
    // Call camera() to update the sprites in the scene
    C.camera();
  }
}

body_moves = 0;

move_body = () => {
  console.log("insert");
  var pos = snake_position[snake_length * 5 + body_moves];
  C.plane({n:"body" + (snake_length * 5 + body_moves), x:pos[0]*50,y:pos[1]*50,w:30,h:30,z:pos[2]*50+21,rx:-45,rz:4,css:"body circle " + (body_moves%2 ? "odd" : "")});
  C.$("body" + body_moves).remove();
  body_moves++;
  //b.classList.toggle("toggle")
}

move_body_back = () => {
  //console.log("move back");
  body_moves--;
  var pos = snake_position[body_moves];
  C.plane({n:"body" + body_moves, x:pos[0]*50,y:pos[1]*50,w:30,h:30,z:pos[2]*50+21,rx:-45,rz:4,css:"body circle " + (body_moves%2 ? "odd" : ""),i:"afterBegin"});
  C.$("body" + (snake_length * 5 + body_moves)).remove();
  b.classList.toggle("toggle");
  snake_position.pop();
  head_angles.pop();
  head_angles_modulo.pop();
}

go_back = () => {
  if(body_moves >= 5){
    console.log("go_back");
    
    var current_position = snake_position[snake_position.length - 5 - 1];
    head_angle = head_angles[head_angles.length - 5 - 1];
    head_angle_modulo = head_angles_modulo[head_angles.length - 5 - 1];
    
    C.move({n:"head", x:current_position[0]*50, y:current_position[1]*50, z:current_position[2]*50+4});
    
    C.move({n:"head_decoration", rz:head_angle});
    
    move_body_back();
    setTimeout(move_body_back, 40);
    setTimeout(move_body_back, 80);
    setTimeout(move_body_back, 120);
    setTimeout(move_body_back, 160);
    
    halt = 1;
    setTimeout(()=>{
      halt = 0
    }, 200);
  }
}