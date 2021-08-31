move_snake = target => {
  
  if(!halt && (puzzle || world==-3) && !win){
    
    var i, target_position, x, y, z, match;
    
    head_position = snake_position[snake_position.length - 1];
    
    // Quit climbing a wall:
    if(on_wall && !high && d){
      
      //console.log("quit wall");
      if(head_angle_modulo == 180){
        go_back();
        return;
      }
      target_position = move_front();
    }

    // Move on floor
    else {
      
      // Right
      if(r){
        
        // Backtrack if head is turned to the left
        if(head_angle_modulo == 90){
          if(head_portal[head_portal.length-1]){
            head_angle += 180;
            head_angle_modulo += 180;
          }
          else {
            go_back();
          }
          return;
        }
        
        // Or try to move on the right
        target_position = move_right();
      }
      
      // Down (down if on wall, front if on floor)
      else if(d){
        
        
        // Backtrack if head is turned to the back
        if(head_angle_modulo == 180){
          if(head_portal[head_portal.length-1]){
            head_angle += 180;
            head_angle_modulo += 180;
          }
          else {
            go_back();
          }
          return;
        }
        
        // Or try to move to the front / down
        target_position = (high ? move_down : move_front)();
      }
      
      // Left
      else if(l){
        
        // Backtrack if head is turned to the right
        if(head_angle_modulo == 270){
          if(head_portal[head_portal.length-1]){
            head_angle += 180;
            head_angle_modulo += 180;
          }
          else {
            go_back();
          }
          return;
        }
        
        // Or try to move to the left
        target_position = move_left();
      }
      
      // Up (up if on wall, back if on floor)
      else if(u){
        
        // Backtrack if head is turned to the front
        if(head_angle_modulo == 0){
          if(head_portal[head_portal.length-1]){
            head_angle += 180;
            head_angle_modulo += 180;
          }
          else {
            go_back();
          }
          return;
        }

        // Or try to move to the back / up
        target_position = (on_wall ? move_up : move_back)();
      }
    }
    
    // Target set: do the move
    if(target_position){
      
      steps++;
      
      if(world > 0) play_next_note();
      
      head_position = target_position;

      // Clamp modulo angle between 0 and 360
      head_angle_modulo = (head_angle_modulo + 360) % 360;
      
      // Save current modulo angle and portal traversal for the 5 new steps
      for(i = 1; i <= 5; i++){
        head_angles_modulo.push(head_angle_modulo);
        head_portal.push(portaling);
      }
      
      // Move whole head
      C.move({n:"head", x:head_position[0]*50+25, y:head_position[1]*50+25 + (behind ? -5 : 0), z:head_position[2]*50+4 + (behind ? 10 : 0)});
      
      // Make the body move 5 steps forward (with a bit of delay for the steps 3-5 to animate the movement)
      move_body();
      move_body();
      setTimeout(move_body, 40);
      setTimeout(move_body, 60);
      setTimeout(move_body, 120);
      
      // Rotate head's inner decoration (eyes, tongue), but not the whole head because it contains the head circle that must always face the camera
      C.move({n:"head_decoration_inner", rz:head_angle});
      
      // Block snake moves for 200ms
      halt = 1;
      setTimeout(()=>{
        halt = 0
      }, 200);
      
      // Call camera() to update the sprites in the scene
      C.camera();
      check_wall();
      check_puzzle();
      document.title = steps;
    }
    
    // Next target set: do the move
    if(next_target){
      setTimeout(()=>{
        steps++;
        
        // Save current modulo angle for the 5 new steps
        for(i = 1; i <= 5; i++){
          head_angles_modulo.push(head_angle_modulo);
        }
        
        // Move whole head
        C.move({n:"head", x:next_target[0]*50+25, y:next_target[1]*50+25 + (behind ? -5 : 0), z:next_target[2]*50+4 + (behind ? 10 : 0)});
        
        // Make the body move 5 steps forward (with a bit of delay for the steps 3-5 to animate the movement)
        move_body();
        move_body();
        setTimeout(move_body, 40);
        setTimeout(move_body, 60);
        setTimeout(move_body, 120);
        
        // Rotate head's inner decoration (eyes, tongue), but not the whole head because it contains the head circle that must always face the camera
        //C.move({n:"head_decoration_inner", rz:head_angle});
        
        // Block snake moves for 200ms
        halt = 1;
        setTimeout(()=>{
          halt = 0;
          portaling = 0;
          next_target = 0;
        }, 200);
        
        // Call camera() to update the sprites in the scene
        C.camera();
        check_wall();
        check_puzzle();
        document.title = steps;
      },200);
    }
  }
}

// Move body forward (1/5th of a cell)
move_body = () => {
  
  // Target position
  var pos = snake_position[snake_length * 5 + body_moves];
  
  // Create a new body part close to the head
  C.plane({g:"snakebody",n:"body"+(snake_length*5+body_moves),x:pos[0]*50+25,y:pos[1]*50+25,w:30,h:30,z:pos[2]*50+25,rx:-45,ry:5,css:"body circle " + (body_moves%2 ? "odd" : "")});
  
  // Remove older part after the tail
  C.$("body" + body_moves).remove();
  
  // Add one move to counter
  body_moves++;
  
  // Optional: toggle colors at each move (more natural but more flickery)
  // b.classList.toggle("toggle")
}

// Move body backwards (1/5th of a cell)
move_body_back = () => {
  
  // Remove one move to counter
  body_moves--;
  
  // Trget position (saved during previous moves)
  var pos = snake_position[body_moves];
  
  // Create new body part after the tail
  C.plane({g:"snakebody",n:"body"+body_moves,x:pos[0]*50+25,y:pos[1]*50+25,w:30,h:30,z:pos[2]*50+25,rx:-
  45,ry:5,css:"body circle " + (body_moves%2 ? "odd" : ""),i:"afterBegin"});
  
  // Remove old body part close to the head
  C.$("body" + (snake_length * 5 + body_moves)).remove();
  
  // Cancel the last saved position, angle, modulo angle
  snake_position.pop();
  head_portal.pop();
  head_angles.pop();
  head_angles_modulo.pop();
  
  // Optional: toggle colors
  // b.classList.toggle("toggle"); 
}

// Move whole snake backwards one full move (5 steps)
go_back = () => {
  
  play_last_note();
  
  // If it's still possible to go back (body has moved at least 5 steps)
  if(body_moves >= 5){
    
    // Retrieve previous position, angle and angle modulo (to make them the current ones)
    head_position = snake_position[snake_position.length - 5 - 1];
    head_angle = head_angles[head_angles.length - 5 - 1];
    head_angle_modulo = head_angles_modulo[head_angles.length - 5 - 1];
    
    // Move head
    C.move({n:"head", x:head_position[0]*50+25, y:head_position[1]*50+25 + (behind ? -5 : 0), z:head_position[2]*50+4 + (behind ? 10 : 0)});
    
    // Rotate head decoration (eyes, tongue)
    C.move({n:"head_decoration_inner", rz:head_angle});
    
    // Make the body go back 1/5th of a step, at 40ms intervals (matching the head's transition duration)
    move_body_back();
    setTimeout(move_body_back, 40);
    setTimeout(move_body_back, 80);
    setTimeout(move_body_back, 120);
    setTimeout(move_body_back, 160);
    
    // No more moves for 200ms
    halt = 1;
    setTimeout(()=>{
      halt = 0
      check_wall();
      check_puzzle();
    }, 200);
    
  }
}

check_wall = () => {
  //console.log("check wall")
  on_wall = 0;
  behind = 0;
  high = 0;
  var pos = snake_position[snake_position.length - 1];
  
  // Snake is "on wall" if there's a wall and head is inbounds and Y == 0
  if(world > 0 && wall && pos[1] == 0 && pos[0] >= 0 && pos[0] < w){
    on_wall = 1;
    C.move({n:"head",y:35});
    b.classList.add("on_wall");
    C.move({n:"head_decoration",rx:head_position[2] > 0 ? -90 : -45});
    
    // Toggle "high" status when Z > 0
    if(pos[2] > 0){
      high = 1;
      b.classList.add("high");
      C.camera({rx:camrx=(world==1&&puzzle==33?30:70),y:0});
    }
    else {
      b.classList.remove("high");
      C.camera({rx:camrx=30,y:h*10});
    }
  }
  
  // Snake is "behind" if there's a wall and Y < 0
  else if(world > 0 && wall && pos[1] < 0 && pos[0] >= -1 && pos[0] < w + 1){
    behind = 1;
    b.classList.add("behind");
    C.camera({rx:camrx=-8,y:-h*5+20});
  }
  
  else {
    b.classList.remove("on_wall");
    b.classList.remove("behind");
    C.move({n:"head_decoration",rx:0});
    if(world > 0) C.camera({rx:camrx=30,y:h*10});
  }
}

inbounds = () => {
  return (
    head_position[0] >= 0
    && head_position[0] <= w - 1
    && head_position[1] >= 0
    && head_position[1] <= h - 1
    && head_position[2] <= h - 1
  );
}

move_left = () => {
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [(head_position[0] - 1 + w) % w, head_position[1], head_position[2]]
    : [head_position[0] - 1, head_position[1], head_position[2]];
    
  // bounds
  if(high && target_position[0] < 0){
    return;
  }
    
  // Check portals
  next_target = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[0] < -9) return;
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(current_puzzle.mirror && inbounds()){
      if(head_position[0] - 1 != ((head_position[0] - 1 + w) % w)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's head is facing right
    if(head_angle_modulo == 0){ head_angle += 90; head_angle_modulo += 90; }
    
    // Rotate left if the snake's head is facing left
    else if(head_angle_modulo == 180){ head_angle -= 90; head_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the head at each step
    snake_position.push([head_position[0] - 1/5, head_position[1], head_position[2]]);
    head_angles.push(head_angle);
    
    for(i = 2; i <= 5; i++){
      snake_position.push([target_position[0] + 1 - i/5, target_position[1], target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      head_angles.push(head_angle);
    }
    
    // Next position (if portaling)
    go_on_next_target(target_position);
    
    // Return new head position
    return target_position;
  }
  
  // No portal if self-collision
  next_target = portaling = 0;
};

move_right = () => {

  // Next position (if all goes well)
  var target_position = 
  world == -3 ?
    [head_position[0] + 1, head_position[1], head_position[2]]
  :
    (current_puzzle.mirror && inbounds())
    ? [(head_position[0] + 1) % w, head_position[1], head_position[2]]
    : [head_position[0] + 1, head_position[1], head_position[2]];
    
  if(high && target_position[0] >= w){
    return;
  }

  // Check portals
  next_target = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[0] >  w + 9) return;
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(world > 0 && current_puzzle.mirror && inbounds()){
      if(head_position[0] + 1 != ((head_position[0] + 1) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's head is facing right
    if(head_angle_modulo == 180){ head_angle += 90; head_angle_modulo += 90; }
    
    // Rotate left if the snake's head is facing left
    else if(head_angle_modulo == 0){ head_angle -= 90; head_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the head at each step
    snake_position.push([head_position[0] + 1/5, head_position[1], head_position[2]]);
    head_angles.push(head_angle);
    
    for(i = 2; i <= 5; i++){
      snake_position.push([target_position[0] - 1 + i/5, target_position[1], target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      head_angles.push(head_angle);
    }
    if(world > 0) C.camera({x:0});
    
    // Next position (if portaling)
    go_on_next_target(target_position);
    
    // Return new head position
    return target_position;
  }
  
  // No portal if self-collision
  next_target = portaling = 0;
};

move_up = () => {
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [head_position[0], head_position[1], (head_position[2] + 1) % h]
    : [head_position[0], head_position[1], head_position[2] + 1];
  
  // Bounds
  if(target_position[2] >= h){
    return;
  }
  
  // Check portals
  next_target = check_portals1(target_position) || check_portals2(target_position);
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(current_puzzle.mirror && inbounds()){
      if(head_position[2] + 1 != ((head_position[2] + 1) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's head is facing right
    if(head_angle_modulo == 90){ head_angle += 90; head_angle_modulo += 90; }
    
    // Rotate left if the snake's head is facing left
    else if(head_angle_modulo == 270){ head_angle -= 90; head_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the head at each step
    snake_position.push([head_position[0], head_position[1], head_position[2] + 1/5]);
    head_angles.push(head_angle);
    
    for(i = 2; i <= 5; i++){
      snake_position.push([target_position[0], target_position[1], target_position[2] - 1 + i/5]);
      head_angles.push(head_angle);
    }
    
    // Next position (if portaling)
    go_on_next_target(target_position);
    
    // Return new head position
    return target_position;
  }
  
  // No portal if self-collision
  next_target = portaling = 0;
};

move_down = () => {
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [head_position[0], head_position[1], (head_position[2] - 1 + h) % h]
    : [head_position[0], head_position[1], head_position[2] - 1];
  
  // Check portals
  next_target = check_portals1(target_position) || check_portals2(target_position);
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
    // Portaling
    if(portaling){
      portal_animation();
    }
    
    if(current_puzzle.mirror && inbounds()){
      if(head_position[2] + 1 != ((head_position[2] - 1 + h) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's head is facing right
    if(head_angle_modulo == 270){ head_angle += 90; head_angle_modulo += 90; }
    
    // Rotate left if the snake's head is facing left
    else if(head_angle_modulo == 90){ head_angle -= 90; head_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the head at each step
    snake_position.push([head_position[0], head_position[1], head_position[2] - 1/5]);
    head_angles.push(head_angle);
    
    for(i = 2; i <= 5; i++){
      snake_position.push([target_position[0], target_position[1], target_position[2] + 1 - i/5]);
      head_angles.push(head_angle);
    }
    
    // Next position (if portaling)
    go_on_next_target(target_position);
    
    // Return new head position
    return target_position;
  }
  
  // No portal if self-collision
  next_target = portaling = 0;
};

move_front = () => {
  
  //console.log("front");
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [head_position[0], (head_position[1] + 1) % h, head_position[2]]
    : [head_position[0], head_position[1] + 1, head_position[2]];
  
  // Check portals
  next_target = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[1] > h + 9) return;
  
  // No collision with wall
  if(wall && target_position[0] >= 0 && target_position[0] < w && target_position[1] == 0){
    return;
  }
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(current_puzzle.mirror && inbounds()){
      if(head_position[1] + 1 != ((head_position[1] + 1) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's head is facing right
    if(head_angle_modulo == 270){ head_angle += 90; head_angle_modulo += 90; }
    
    // Rotate left if the snake's head is facing left
    else if(head_angle_modulo == 90){ head_angle -= 90; head_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the head at each step
    snake_position.push([head_position[0], head_position[1] + 1/5, head_position[2]]);
    head_angles.push(head_angle);
    
    for(i = 2; i <= 5; i++){
      snake_position.push([target_position[0], target_position[1] - 1 + i/5, target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      head_angles.push(head_angle);
    }
    
    // Next position (if portaling)
    go_on_next_target(target_position);
    
    // Return new head position
    return target_position;
  }
  
  // No portal if self-collision
  next_target = portaling = 0;
};

move_back = () => {
  
  // Next position (if all goes well)
  var target_position = (current_puzzle.mirror && inbounds())
    ? [head_position[0], (head_position[1] - 1 + h) % h, head_position[2]]
    : [head_position[0], head_position[1] - 1, head_position[2]];
    
  // Check portals
  next_target = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[1] < -8) return;
  
  // No collision with wall
  if(wall && target_position[0] >= 0 && target_position[0] < w && target_position[1] == -1){
    return;
  }
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    else if(current_puzzle.mirror && inbounds()){
      if(head_position[1] - 1 != ((head_position[1] - 1 + h) % h)){
        mirror_animation();
      }
    }

    // Rotate right if the snake's head is facing right
    if(head_angle_modulo == 90){ head_angle += 90; head_angle_modulo += 90; }
    
    // Rotate left if the snake's head is facing left
    else if(head_angle_modulo == 270){ head_angle -= 90; head_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the head at each step
    snake_position.push([head_position[0], head_position[1] - 1/5, head_position[2]]);
    head_angles.push(head_angle);
    
    for(i = 2; i <= 5; i++){
      snake_position.push([target_position[0], target_position[1] + 1 - i/5, target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      head_angles.push(head_angle);
    }
    
    // Next position (if portaling)
    go_on_next_target(target_position);
    
    // Return new head position
    return target_position;
  }
  
  // No portal if self-collision
  next_target = portaling = 0;
};

collision = (target) => {
  if(world > 0 && bricks.find(a=>a[0] == target[0] && a[1] == target[1] && (target[2] == (a[2]||0) || target[2] == Math.floor(a[2])))) {
    return 1;
  }
  if(world > 0 && trees.find(a=>a[0] > target[0] - 1 && a[0] < target[0] + 2 && a[1] > target[1] - 1 && a[1] < target[1] +2)) {
    return 1;
  }
  if(world > 0 && animals.find(a=>a[0] == target[0] && (a[1] == target[1] || a[1] == target[1]+1))) {
    return 1;
  }
}

mirror_animation = () => {
  mirroring = 1;
  head_scale.style.transition = "none";
  head_scale.style.transform = "scaleX(.1)scaleY(.1)scaleZ(.1)";
  b.classList.add("mirroring");
  setTimeout(()=>{
    mirroring = 0;
    head_scale.style.transition = ".2s";
    head_scale.style.transform = "";
    b.classList.remove("mirroring");
  }, 50);
}

portal_animation = () => {
  setTimeout(()=>{
    head_scale.style.transition = "none";
    head_scale.style.transform = "scaleX(.1)scaleY(.1)scaleZ(.1)";
    b.classList.add("portaling");
  },200);
  setTimeout(()=>{
    portaling = 0;
    head_scale.style.transition = ".2s";
    head_scale.style.transform = "";
    b.classList.remove("portaling");
    play_sound(bzzt_sound);
  }, 400);
}

check_portals1 = (target_position) => {
  // Portals 1 one way
  if(
    portals1
    && (portals1[0][0] == target_position[0] && portals1[0][1] == target_position[1] && portals1[0][2] == target_position[2])
    && !(portals1[1][0] == head_position[0] && portals1[1][1] == head_position[1] && portals1[1][2] == head_position[2])
  ){
    portaling = 1;
    return portals1[1]; 
  }
  
  // Portals 1 the other way
  if(
    portals1
    && (portals1[1][0] == target_position[0] && portals1[1][1] == target_position[1] && portals1[1][2] == target_position[2])
    && !(portals1[0][0] == head_position[0] && portals1[0][1] == head_position[1] && portals1[0][2] == head_position[2])
  ){
    portaling = 1;
    return portals1[0]; 
  }
}

check_portals2 = (target_position) => {
  // Portals 1 one way
  if(
    portals2
    && (portals2[0][0] == target_position[0] && portals2[0][1] == target_position[1] && portals2[0][2] == target_position[2])
    && !(portals2[1][0] == head_position[0] && portals2[1][1] == head_position[1] && portals2[1][2] == head_position[2])
  ){
    portaling = 1;
    return portals2[1]; 
  }
  
  // Portals 1 the other way
  if(
    portals2
    && (portals2[1][0] == target_position[0] && portals2[1][1] == target_position[1] && portals2[1][2] == target_position[2])
    && !(portals2[0][0] == head_position[0] && portals2[0][1] == head_position[1] && portals2[0][2] == head_position[2])
  ){
    portaling = 1;
    return portals2[0]; 
  }
}

go_on_next_target = (target_position) => {
  console.log(target_position, next_target);
  if(next_target){
    // Start on floor
    if(target_position[2] == 0 && floor){
      snake_position.push([target_position[0], target_position[1], target_position[2] - 1/5]);
      snake_position.push([target_position[0], target_position[1], head_position[2] - 2/5]);
    }
    // Start on wall
    else {
      snake_position.push([target_position[0], target_position[1] - 1/5, target_position[2]]);
      snake_position.push([target_position[0], target_position[1] - 2/5, head_position[2]]);
    }
    // End on floor
    if(next_target[2] == 0 && floor){
      snake_position.push([next_target[0], next_target[1], next_target[2] - 2/5]);
      snake_position.push([next_target[0], next_target[1], next_target[2] - 1/5]);
      snake_position.push([next_target[0], next_target[1], next_target[2]]);
    }
    // End of wall
    else {
      snake_position.push([next_target[0], next_target[1] - 2/5, next_target[2]]);
      snake_position.push([next_target[0], next_target[1] - 1/5, next_target[2]]);
      snake_position.push([next_target[0], next_target[1], next_target[2]]);
    }
    head_angles.push(head_angle);
    head_angles.push(head_angle);
    head_angles.push(head_angle);
    head_angles.push(head_angle);
    head_angles.push(head_angle);
  }
}