move_snake = target => {
  
  //console.clear();
  
  var i, target_position, x, y, z, match;
  
  // Target is the div touched while moving the snake
  document.title = target.id;
  
  head_position = snake_position[snake_position.length - 1];
  
  // If the serpent is trying to quit the wall, try to move to the front:
  if(on_wall && !high && (d || target.id == "puzzlefloor")){
    
    console.log("quit wall");
    if(head_angle_modulo == 180){
      go_back();
      return;
    }
    target_position = move_front();
    console.log(1,target_position);
  }
  
  // If the serpent is climbing a wall:
  else if(on_wall && (l || u || r || d || target.classList.contains("wall_tile"))){
    
    // console.log("move on wall");

    // Get touched tile coordinates
    if(target.id != "b"){
      [match,x,z] = target.id.match(/wall_tile_(\d*)_(\d*)/);
      x = +x;
      z = h - +z - 1;
    }
    
    // Try to move on the touched tile if it's a neighbour of the current head position
    
    // Left
    if((l && (!high || head_position[0] > 0)) || (x == head_position[0] - 1 && z == head_position[2])){
      
      // Backtrack if head is turned to the right
      if(head_angle_modulo == 270){
        go_back();
        return;
      }
      
      target_position = move_left();
    }
    
    // Right
    else if((r && (!high || head_position[0] < w - 1)) || (x == head_position[0] + 1 && z == head_position[2])){
      
      // Backtrack if head is turned to the left
      if(head_angle_modulo == 90){
        go_back();
        return;
      }
      
      target_position = move_right();
    }
    
    // Up
    else if((u && head_position[2] < h - 1) || (x == head_position[0] && z == head_position[2] + 1)){
      
      // Backtrack if head is turned to the bottom
      if(head_angle_modulo == 0){
        go_back();
        return;
      }
      
      target_position = move_up();
    }
    
    // Down
    else if((d && high) || (x == head_position[0] && z == head_position[2] - 1)){
      
      // Backtrack if head is turned to the top
      if(head_angle_modulo == 180){
        go_back();
        return;
      }
      
      target_position = move_down();
    }
  }
  
  else {
    
    // console.log("move on floor");
  
    // On the ground, the snake's head is surrounded by 4 invisible "trigger" divs
    // The head's angle can be any multiple of 90deg
    // For computations, we also keep a "modulo" value clamped between 0 and 360
    
    // As soon as the right trigger is touched
    if(r || target.id == "right"){
      
      // Backtrack if head is turned to the left
      if(head_angle_modulo == 90){
        go_back();
        return;
      }
      
      // Or try to move on the right
      target_position = move_right();
    }
    
    // As soon as the down trigger is touched
    else if(d || target.id == "down"){
      
      
      // Backtrack if head is turned to the back
      if(head_angle_modulo == 180){
        go_back();
        return;
      }
      
      // Or try to move to the front
      target_position = move_front();
    }
    
    // As soon as the left trigger is touched
    else if(l || target.id == "left"){
      
      // Backtrack if head is turned to the right
      if(head_angle_modulo == 270){
        go_back();
        return;
      }
      
      // Or try to move to the left
      target_position = move_left();
    }
    
    // As soon as the up trigger is touched
    else if(u || target.id == "up"){
      
      // Backtrack if head is turned to the front
      if(head_angle_modulo == 0){
        go_back();
        return;
      }

      // Or try to move to the back
      target_position = move_back();
    }
  }
  
  // Do the move
  if(target_position){
    
    play_note();
    
    head_position = target_position;

    // Clamp modulo angle between 0 and 360
    head_angle_modulo = (head_angle_modulo + 360) % 360;
    
    // Save current modulo angle for the 5 new steps
    for(i = 1; i <= 5; i++){
      head_angles_modulo.push(head_angle_modulo);
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
    
    // Block snake moves for 100ms
    halt = 1;
    setTimeout(()=>{
      halt = 0
    }, 200);
    
    // Call camera() to update the sprites in the scene
    C.camera();
    check_wall();
    check_puzzle();
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
  console.log("check wall")
  on_wall = 0;
  behind = 0;
  high = 0;
  var pos = snake_position[snake_position.length - 1];
  
  // Snake is "on wall" if there's a wall and head is inbounds and Y == 0
  if(current_puzzle.wall && pos[1] == 0 && pos[0] >= 0 && pos[0] < w){
    on_wall = 1;
    C.move({n:"head",y:35});
    b.classList.add("on_wall");
    C.move({n:"head_decoration",rx:head_position[2] > 0 ? -90 : -45});
    
    // Toggle "high" status when Z > 0
    if(pos[2] > 0){
      console.log("high", pos)
      high = 1;
      b.classList.add("high");
      C.camera({rx:camrx=70,y:0});
    }
    else {
      b.classList.remove("high");
      C.camera({rx:camrx=30,y:h*10});
    }
  }
  
  // Snake is "behind" if there's a wall and Y < 0
  else if(current_puzzle.wall && pos[1] < 0 && pos[0] >= -1 && pos[0] < w + 1){
    behind = 1;
    b.classList.add("behind");
    C.camera({rx:camrx=-8,y:-h*5+20});
  }
  
  else {
    b.classList.remove("on_wall");
    b.classList.remove("behind");
    C.move({n:"head_decoration",rx:0});
    C.camera({rx:camrx=30,y:h*10});
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
  
  console.log("left");
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [(head_position[0] - 1 + w) % w, head_position[1], head_position[2]]
    : [head_position[0] - 1, head_position[1], head_position[2]];
  
  // Bounds
  if(target_position[0] < -9) return;
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
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
    return target_position;
  }
};

move_right = () => {
  
  console.log("right");
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [(head_position[0] + 1) % w, head_position[1], head_position[2]]
    : [head_position[0] + 1, head_position[1], head_position[2]];
  
  // Bounds
  if(target_position[0] >  w + 9) return;
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
    // Mirroring
    if(current_puzzle.mirror && inbounds()){
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
    return target_position;
  }
};

move_up = () => {
  
  console.log("up");
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [head_position[0], head_position[1], (head_position[2] + 1) % h]
    : [head_position[0], head_position[1], head_position[2] + 1];
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
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
    return target_position;
  }
};

move_down = () => {
  
  console.log("down");
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [head_position[0], head_position[1], (head_position[2] - 1 + h) % h]
    : [head_position[0], head_position[1], head_position[2] - 1];
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
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
    return target_position;
  }
};

move_front = () => {
  
  console.log("front");
  
  // Next position (if all goes well)
  var target_position = current_puzzle.mirror && inbounds()
    ? [head_position[0], (head_position[1] + 1) % h, head_position[2]]
    : [head_position[0], head_position[1] + 1, head_position[2]];
  
  // Bounds
  if(target_position[1] > h + 9) return;
  
  // No collision with wall
  if(current_puzzle.wall && target_position[0] >= 0 && target_position[0] < w && target_position[1] == 0){
    return;
  }
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
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
    return target_position;
  }
};

move_back = () => {
  
  console.log("back");
  
  // Next position (if all goes well)
  var target_position = (current_puzzle.mirror && inbounds())
    ? [head_position[0], (head_position[1] - 1 + h) % h, head_position[2]]
    : [head_position[0], head_position[1] - 1, head_position[2]];
  
  // Bounds
  if(target_position[1] < -8) return;
  
  // No collision with wall
  if(current_puzzle.wall && target_position[0] >= 0 && target_position[0] < w && target_position[1] == -1){
    return;
  }
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!snake_position.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
    // Mirroring
    if(current_puzzle.mirror && inbounds()){
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
    return target_position;
  }
};

collision = (target) => {
  if(bricks.find(a=>a[0] == target[0] && a[1] == target[1] && a[2] == target[2])) {
    return 1;
  }
  if(trees.find(a=>a[0] > target[0] - 1 && a[0] < target[0] + 2 && a[1] > target[1] - 1 && a[1] < target[1] +2)) {
    return 1;
  }
  if(animals.find(a=>a[0] == target[0] && (a[1] == target[1] || a[1] == target[1]+1))) {
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