move_snake = () => {

  if(!a && (p || W<=-3) && !win){
    //a=1;
    
    var i, target_position, x, y, z, match;
    
    hp = S[S.length - 1];
    pp = S[S.length - 2];
    
    // Moon: tilt B up/down when moving up/down
    if(W > 3){
      if(pp[2] > hp[2]){
        C.move({n:"h6",rx:-45});
      }
      else if(pp[2] < hp[2]){
        C.move({n:"h6",rx:45});
      }
      else {
        C.move({n:"h6",rx:0});
      }
    }
    
    // Quit climbing a wall:
    if(W < 4 && on_wall && !high && d){
      
      //console.log("quit wall");
      if(B_angle_modulo == 180 && pp[1] > 0){
        go_back();
        return;
      }
      if(B_angle_modulo == 180){
        B_angle += 180;
        B_angle_modulo += 180;
      }
      target_position = move_front();
    }

    // Move on floor + wall (worlds 1-3) / in the air (world 4)
    else {
      
      //console.log("move", a);
      
      // Right
      if(r){
        
        //console.log(B_portal[B_portal.length-1], pp[0], hp[0]);
        
        // Backtrack if B is turned to the left
        if(B_angle_modulo == 90){
          if(B_portal[B_portal.length-1] || (W > 3 && pp[2] != hp[2])){
            B_angle += 180;
            B_angle_modulo += 180;
          }
          else {
            go_back();
            return;
          }
        }
        
        // Or try to move on the right
        target_position = move_right();
      }
      
      // Down (down if on wall, front if on floor)
      else if(d){

        // Backtrack if B is turned to the back
        if(B_angle_modulo == 180){
          if(B_portal[B_portal.length-1] || (W > 3 && pp[2] != hp[2])){
            B_angle += 180;
            B_angle_modulo += 180;
          }
          else {
            go_back();
            return;
          }
        }
        
        // Or try to move to the front / down
        target_position = (high && W < 4 ? move_down : move_front)();
      }
      
      // Left
      else if(l){
        
        // Backtrack if B is turned to the right
        if(B_angle_modulo == 270){
          if(B_portal[B_portal.length-1] || (W > 3 && pp[2] != hp[2])){
            B_angle += 180;
            B_angle_modulo += 180;
          }
          else {
            go_back();
            return;
          }
        }
        
        // Or try to move to the left
        target_position = move_left();
      }
      
      // Up (up if on wall, back if on floor)
      else if(u){
        
        // Backtrack if B is turned to the front
        if(B_angle_modulo == 0){
          if(B_portal[B_portal.length-1] || (W > 3 && pp[2] != hp[2])){
            B_angle += 180;
            B_angle_modulo += 180;
          }
          else {
            go_back();
            return;
          }
        }

        // Or try to move to the back / up
        target_position = (on_wall && W < 4 ? move_up : move_back)();
      }
      
      else if(W > 3 && U){
        
        // Backtrack if B is turned to the bottom
        if(pp[2] > hp[2]){
          go_back();
          return;
        }
        
        //console.log(B_angle);
        target_position = move_up();
        //console.log(B_angle);
      }
      
      else if(W > 3 && D){
        // Backtrack if B is turned to the bottom
        if(pp[2] < hp[2]){
          go_back();
          return;
        }
        target_position = move_down();
      }
    }
    
    // Target set: do the move
    if(target_position){
      
      if(W > 0) {
        st.innerHTML = Math.min(99,++steps);
        I && clearInterval(I);
        if(new Date() - time > 200) play_next_note();
        I = 0;
      }
      
      hp = target_position;

      // Clamp modulo angle between 0 and 360
      B_angle_modulo = (B_angle_modulo + 360) % 360;
      
      // Save current modulo angle and portal traversal for the 5 new steps
      for(i = 1; i <= 5; i++){
        B_angles_modulo.push(B_angle_modulo);
        B_portal.push(portaling);
      }
      
      // Move whole B
      C.move({n:"y", x:hp[0]*50+25, y:hp[1]*50+27 + (behind ? -5 : 0), z:hp[2]*50+4 + (behind ? 10 : 0)});
      
      // Make the body move 5 steps forward (with a bit of delay for the steps 3-5 to animate the movement)
      move_body();
      move_body();
      setTimeout(move_body, 30);
      setTimeout(move_body, 60);
      setTimeout(move_body, 90);
      setTimeout(gravity, 120);
      
      // Rotate B's inner decoration (eyes, tongue), but not the whole B because it contains the B circle that must always face the c
      C.move({n:"h5", rz:B_angle});
      
      // Block snake moves for 200ms
      a = 1;
      setTimeout(()=>{
        a = 0
      }, 200);
      
      // Call c() to update the sprites in the s
      C.c();
      check_wall();
      check_p();
      //document.title = steps;
    }
    
    // Next target set: do the move
    if(n){
      setTimeout(()=>{
        st.innerHTML = Math.min(99,++steps);
        
        // Save current modulo angle for the 5 new steps
        for(i = 1; i <= 5; i++){
          B_angles_modulo.push(B_angle_modulo);
        }
        
        // Move whole B
        C.move({n:"y", x:n[0]*50+25, y:n[1]*50+27 + (behind ? -5 : 0), z:n[2]*50+4 + (behind ? 10 : 0)});
        
        // Make the body move 5 steps forward (with a bit of delay for the steps 3-5 to animate the movement)
        move_body();
        move_body();
        setTimeout(move_body, 30);
        setTimeout(move_body, 60);
        setTimeout(move_body, 90);
        setTimeout(gravity, 120);
        
        // Rotate B's inner decoration (eyes, tongue), but not the whole B because it contains the B circle that must always face the c
        //C.move({n:"h5", rz:B_angle});
        
        // Block snake moves for 200ms
        a = 1;
        setTimeout(()=>{
          a = 0;
          portaling = 0;
          n = 0;
        }, 200);
        
        // Call c() to update the sprites in the s
        C.c();
        check_wall();
        check_p();
        //document.title = steps;
      },200);
    }
  }
}

// Move body forward (1/5th of a cell)
move_body = () => {
  
  // Target position
  var pos = S[snake_length * 5 + body_moves];
  
  // Create a new body part close to the B
  if(pos)C.plane({g:"sb",n:"body"+(snake_length*5+body_moves),x:pos[0]*50+25,y:pos[1]*50+25,w:30,h:30,z:pos[2]*50+25,rx:-45,ry:5,css:"body c " + (body_moves%2 ? "odd" : "")});
  
  // Remove older part after the tail
  C.$("body" + body_moves).remove();
  
  // Add one move to counter
  body_moves++;
}

// Move body backwards (1/5th of a cell)
move_body_back = () => {
  
  // Remove one move to counter
  body_moves--;
  
  // Trget position (saved during previous moves)
  var pos = S[body_moves];
  
  // Create new body part after the tail
  C.plane({g:"sb",n:"body"+body_moves,x:pos[0]*50+25,y:pos[1]*50+25,w:30,h:30,z:pos[2]*50+25,rx:-
  45,ry:5,css:"body c " + (body_moves%2 ? "odd" : ""),i:"afterBegin"});
  
  // Remove old body part close to the B
  C.$("body" + (snake_length * 5 + body_moves)).remove();
  
  // Cancel the last saved position, angle, modulo angle
  S.pop();
  B_portal.pop();
  B_angles.pop();
  B_angles_modulo.pop();
  
  // Optional: toggle colors
  // b.classList.toggle("toggle"); 
}

// Move whole snake backwards one full move (5 steps)
go_back = () => {
  
  // If it's still possible to go back (body has moved at least 5 steps)
  if(body_moves >= 5){
    
    st.innerHTML = Math.min(99,++steps);
  
    play_last_note();
    
    // Retrieve previous position, angle and angle modulo (to make them the current ones)
    hp = S[S.length - 5 - 1];
    B_angle = B_angles[B_angles.length - 5 - 1];
    B_angle_modulo = B_angles_modulo[B_angles.length - 5 - 1];
    
    // Move B
    C.move({n:"y", x:hp[0]*50+25, y:hp[1]*50+27 + (behind ? -5 : 0), z:hp[2]*50+4 + (behind ? 10 : 0)});
    
    // Rotate B decoration (eyes, tongue)
    C.move({n:"h5", rz:B_angle});
    
    // Make the body go back 1/5th of a step, at 40ms intervals (matching the B's transition duration)
    move_body_back();
    setTimeout(move_body_back, 40);
    setTimeout(move_body_back, 80);
    setTimeout(move_body_back, 120);
    setTimeout(move_body_back, 160);
    
    // No more moves for 200ms
    a = 1;
    setTimeout(()=>{
      a = 0
      check_wall();
      check_p();
    }, 200);
  }
}

check_wall = () => {
  //console.log("check wall")
  on_wall = 0;
  behind = 0;
  high = 0;
  var pos = S[S.length - 1];
  
  // Snake is "on wall" if there's a wall and B is inbounds and Y == 0
  if(W > 0 && W < 4 && wall && pos[1] == 0 && pos[0] >= 0 && pos[0] < w){
    on_wall = 1;
    C.move({n:"y",y:35});
    b.classList.add("on_wall");
    C.move({n:"h4",rx:hp[2] > 0 ? -90 : -45});
    
    // Toggle "high" status when Z > 0
    if(pos[2] > 0 && W < 4){
      high = 1;
      b.classList.add("high");
      C.c({rx:rx=(W==1&&p==33)?30:(W==2&&p==30)?50:70,y:0});
    }
    else {
      b.classList.remove("high");
      C.c({rx:rx=(W==2&&p==30)?50:30,y:h*10});
    }
  }
  
  // Snake is "behind" if there's a wall and Y < 0
  else if(W > 0 && wall && pos[1] < 0 && pos[0] >= -1 && pos[0] < w + 1){
    behind = 1;
    b.classList.add("behind");
    C.c({rx:rx=-8,y:-h*5+20});
  }
  
  else {
    b.classList.remove("on_wall");
    b.classList.remove("behind");
    C.move({n:"h4",rx:0});
    if(W > 0) C.c({rx:rx=(W==2&&p==30)?50:30,y:h*10});
  }
}

inbounds = () => {
  return (
    hp[0] >= 0
    && hp[0] <= w - 1
    && hp[1] >= 0
    && hp[1] <= h - 1
    && hp[2] <= h - 1
  );
}

move_left = () => {
  
  // Next position (if all goes well)
  var target_position = mirror && inbounds()
    ? [(hp[0] - 1 + w) % w, hp[1], hp[2]]
    : [hp[0] - 1, hp[1], hp[2]];
    
  // bounds
  if(high && target_position[0] < 0){
    return;
  }
    
  // Check portals
  n = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[0] < -9) return;
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!S.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(mirror && inbounds()){
      if(hp[0] - 1 != ((hp[0] - 1 + w) % w)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's B is facing right
    if(B_angle_modulo == 0){ B_angle += 90; B_angle_modulo += 90; }
    
    // Rotate left if the snake's B is facing left
    else if(B_angle_modulo == 180){ B_angle -= 90; B_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the B at each step
    S.push([hp[0] - 1/5, hp[1], hp[2]]);
    B_angles.push(B_angle);
    
    for(i = 2; i <= 5; i++){
      S.push([target_position[0] + 1 - i/5, target_position[1], target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      B_angles.push(B_angle);
    }
    
    // Next position (if portaling)
    go_on_n(target_position);
    
    // Return new B position
    return target_position;
  }
  
  // No portal if self-collision
  n = portaling = 0;
};

move_right = () => {

  // Next position (if all goes well)
  var target_position = 
  W <= -3 ?
    [hp[0] + 1, hp[1], hp[2]]
  :
    (mirror && inbounds())
    ? [(hp[0] + 1) % w, hp[1], hp[2]]
    : [hp[0] + 1, hp[1], hp[2]];
    
  if(high && target_position[0] >= w){
    return;
  }

  // Check portals
  n = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[0] >  w + 9) return;
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!S.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(W > 0 && mirror && inbounds()){
      if(hp[0] + 1 != ((hp[0] + 1) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's B is facing right
    if(B_angle_modulo == 180){ B_angle += 90; B_angle_modulo += 90; }
    
    // Rotate left if the snake's B is facing left
    else if(B_angle_modulo == 0){ B_angle -= 90; B_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the B at each step
    S.push([hp[0] + 1/5, hp[1], hp[2]]);
    B_angles.push(B_angle);
    
    for(i = 2; i <= 5; i++){
      S.push([target_position[0] - 1 + i/5, target_position[1], target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      B_angles.push(B_angle);
    }
    if(W > 0) C.c({x:0});
    
    // Next position (if portaling)
    go_on_n(target_position);
    
    // Return new B position
    return target_position;
  }
  
  // No portal if self-collision
  n = portaling = 0;
};

move_up = () => {
  
  // Next position (if all goes well)
  var target_position = mirror && W > 3 && inbounds()
    ? [hp[0], hp[1], (hp[2] + 1) % h]
    : [hp[0], hp[1], hp[2] + 1];
  
  // Bounds
  if(W < 3 && target_position[2] >= h){
    return;
  }
  
  // Check portals
  n = check_portals1(target_position) || check_portals2(target_position);
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!S.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(mirror && inbounds()){
      if(hp[2] + 1 != ((hp[2] + 1) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's B is facing right
    if(W < 4 && B_angle_modulo == 90){ B_angle += 90; B_angle_modulo += 90; }
    
    // Rotate left if the snake's B is facing left
    else if(W < 4 && B_angle_modulo == 270){ B_angle -= 90; B_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the B at each step
    S.push([hp[0], hp[1], hp[2] + 1/5]);
    B_angles.push(B_angle);
    
    for(i = 2; i <= 5; i++){
      S.push([target_position[0], target_position[1], target_position[2] - 1 + i/5]);
      B_angles.push(B_angle);
    }
    
    // Next position (if portaling)
    go_on_n(target_position);
    
    // Return new B position
    return target_position;
  }
  
  // No portal if self-collision
  n = portaling = 0;
};

move_down = () => {
  
  // Next position (if all goes well)
  var target_position = mirror && inbounds()
    ? [hp[0], hp[1], (hp[2] - 1 + h) % h]
    : [hp[0], hp[1], hp[2] - 1];
  
  // Check portals
  n = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[2] < 0){
    return;
  }
  
  //console.log(hp, target_position, n);
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!S.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
    // Portaling
    if(portaling){
      portal_animation();
    }
    
    if(mirror && inbounds()){
      if(hp[2] - 1 != ((hp[2] - 1 + h) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's B is facing right
    if(W < 4 && B_angle_modulo == 270){ B_angle += 90; B_angle_modulo += 90; }
    
    // Rotate left if the snake's B is facing left
    else if(W < 4 && B_angle_modulo == 90){ B_angle -= 90; B_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the B at each step
    S.push([hp[0], hp[1], hp[2] - 1/5]);
    B_angles.push(B_angle);
    
    for(i = 2; i <= 5; i++){
      S.push([target_position[0], target_position[1], target_position[2] + 1 - i/5]);
      B_angles.push(B_angle);
    }
    
    // Next position (if portaling)
    go_on_n(target_position);
    
    // Return new B position
    return target_position;
  }
  
  // No portal if self-collision
  n = portaling = 0;
};

move_front = () => {
  
  //console.log("front");
  
  //console.log(mirror, inbounds());
  
  // Next position (if all goes well)
  var target_position = mirror && (!wall || W>3) && inbounds()
    ? [hp[0], (hp[1] + 1) % h, hp[2]]
    : [hp[0], hp[1] + 1, hp[2]];
    
  
  // Check portals
  n = check_portals1(target_position) || check_portals2(target_position);
  
  //console.log(target_position, n);
  
  // Bounds
  if(target_position[1] > h + 9) return;
  
  // No collision with wall if no mirroring
  if(wall && target_position[0] >= 0 && target_position[0] < w && target_position[1] == 0 && hp[1] < 0){
    return;
  }
  //console.log(target_position);
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!S.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){

    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    if(mirror && inbounds()){
      if(hp[1] + 1 != ((hp[1] + 1) % h)){
        mirror_animation();
      }
    }
  
    // Rotate right if the snake's B is facing right
    if(B_angle_modulo == 270){ B_angle += 90; B_angle_modulo += 90; }
    
    // Rotate left if the snake's B is facing left
    else if(B_angle_modulo == 90){ B_angle -= 90; B_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the B at each step
    S.push([hp[0], hp[1] + 1/5, hp[2]]);
    B_angles.push(B_angle);
    
    for(i = 2; i <= 5; i++){
      S.push([target_position[0], target_position[1] - 1 + i/5, target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      B_angles.push(B_angle);
    }
    
    // Next position (if portaling)
    go_on_n(target_position);
    
    // Return new B position
    return target_position;
  }
  
  // No portal if self-collision
  n = portaling = 0;
};

move_back = () => {
  
  // Next position (if all goes well)
  var target_position = (mirror && inbounds())
    ? [hp[0], (hp[1] - 1 + h) % h, hp[2]]
    : [hp[0], hp[1] - 1, hp[2]];
    
  // Check portals
  n = check_portals1(target_position) || check_portals2(target_position);
  
  // Bounds
  if(target_position[1] < -8) return;
  
  // No collision with wall
  if(wall && target_position[0] >= 0 && target_position[0] < w && target_position[1] == -1){
    return;
  }
  
  // No collision with cubes or trees
  if(collision(target_position)) return;
  
  // No self collision
  if(!S.slice(-snake_length * 5).find(a => a[0] == target_position[0] && a[1] == target_position[1] && a[2] == target_position[2])){
    
    // Portaling
    if(portaling){
      portal_animation();
    }
    
    // Mirroring
    else if(mirror && inbounds()){
      if(hp[1] - 1 != ((hp[1] - 1 + h) % h)){
        mirror_animation();
      }
    }

    // Rotate right if the snake's B is facing right
    if(B_angle_modulo == 90){ B_angle += 90; B_angle_modulo += 90; }
    
    // Rotate left if the snake's B is facing left
    else if(B_angle_modulo == 270){ B_angle -= 90; B_angle_modulo -= 90; }
    
    // Advance the snake 5 steps on the front, save the positions and angles of the B at each step
    S.push([hp[0], hp[1] - 1/5, hp[2]]);
    B_angles.push(B_angle);
    
    for(i = 2; i <= 5; i++){
      S.push([target_position[0], target_position[1] + 1 - i/5, target_position[2] + ((i < 4 && mirroring) ? -99 : 0)]);
      B_angles.push(B_angle);
    }
    
    // Next position (if portaling)
    go_on_n(target_position);
    
    // Return new B position
    return target_position;
  }
  
  // No portal if self-collision
  n = portaling = 0;
};

collision = (target) => {
  if(W > 0 && bricks.find(a=>a[0] == target[0] && a[1] == target[1] && (target[2] == (a[2]||0) || target[2] == Math.floor(a[2])))) {
    return 1;
  }
  if(W > 0 && trees.find(a=>a[0] > target[0] -1 && a[0] < target[0] + 1 && a[1] > target[1] - 1 && a[1] < target[1] +1)) {
    return 1;
  }
  if(W > 0 && animals.find(a=>a[0] == target[0] && (a[1] == target[1] || a[1] == target[1]+1))) {
    return 1;
  }
}

mirror_animation = () => {
  mirroring = 1;
  h2.style.transition = "none";
  h2.style.transform = "scaleX(.1)scaleY(.1)scaleZ(.1)";
  b.classList.add("mirroring");
  setTimeout(()=>{
    mirroring = 0;
    h2.style.transition = ".2s";
    h2.style.transform = "";
    b.classList.remove("mirroring");
  }, 50);
}

portal_animation = () => {
  setTimeout(()=>{
    h2.style.transition = "none";
    h2.style.transform = "scaleX(.1)scaleY(.1)scaleZ(.1)";
    b.classList.add("portaling");
  },200);
  setTimeout(()=>{
    portaling = 0;
    h2.style.transition = ".2s";
    h2.style.transform = "";
    b.classList.remove("portaling");
    play_sound(bzzt_sound);
  }, 400);
}

check_portals1 = (target_position) => {
  // Portals 1 one way
  if(
    portals1
    && (portals1[0][0] == target_position[0] && portals1[0][1] == target_position[1] && portals1[0][2] == target_position[2])
    && !(portals1[1][0] == hp[0] && portals1[1][1] == hp[1] && portals1[1][2] == hp[2])
  ){
    portaling = 1;
    return portals1[1]; 
  }
  
  // Portals 1 the other way
  if(
    portals1
    && (portals1[1][0] == target_position[0] && portals1[1][1] == target_position[1] && portals1[1][2] == target_position[2])
    && !(portals1[0][0] == hp[0] && portals1[0][1] == hp[1] && portals1[0][2] == hp[2])
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
    && !(portals2[1][0] == hp[0] && portals2[1][1] == hp[1] && portals2[1][2] == hp[2])
  ){
    portaling = 1;
    return portals2[1]; 
  }
  
  // Portals 1 the other way
  if(
    portals2
    && (portals2[1][0] == target_position[0] && portals2[1][1] == target_position[1] && portals2[1][2] == target_position[2])
    && !(portals2[0][0] == hp[0] && portals2[0][1] == hp[1] && portals2[0][2] == hp[2])
  ){
    portaling = 1;
    return portals2[0]; 
  }
}

go_on_n = (target_position) => {
  //console.log(target_position, n);
  if(n){
    // Start on floor
    if(target_position[2] == 0 && floor){
      S.push([target_position[0], target_position[1], target_position[2] - 1/5]);
      S.push([target_position[0], target_position[1], target_position[2] - 2/5]);
    }
    // Start on wall
    else {
      S.push([target_position[0], target_position[1] - 1/5, target_position[2]]);
      S.push([target_position[0], target_position[1] - 2/5, target_position[2]]);
    }
    // End on floor
    if(n[2] == 0 && floor){
      S.push([n[0], n[1], n[2] - 2/5]);
      S.push([n[0], n[1], n[2] - 1/5]);
      S.push([n[0], n[1], n[2]]);
    }
    // End of wall
    else {
      S.push([n[0], n[1] - 2/5, n[2]]);
      S.push([n[0], n[1] - 1/5, n[2]]);
      S.push([n[0], n[1], n[2]]);
    }
    B_angles.push(B_angle);
    B_angles.push(B_angle);
    B_angles.push(B_angle);
    B_angles.push(B_angle);
    B_angles.push(B_angle);
  }
}

gravity = () => {
  var i, flying;
  if(W > 3) {
    //for(j = 0; j < 2; j++){
      flying = 1;
      var current_positions = S.slice(-(snake_length + 1) * 5);
      for(i of current_positions){
        //if(i[2] == 0 || (i[2] > 0 && bricks.find(a=>a[0] == i[0] && a[1] == i[1] && Math.floor(a[2]) == i[2]-1))){
        if(i[2] == 0 || (i[2] == 1 && bricks.find(a=>a[0] == i[0] && a[1] == i[1]))){
          flying = 0;
        }
      }
      
      if(flying){
        current_positions.forEach(a=>a[2]--);
        Ss = current_positions;
        steps = 0;
        document.querySelectorAll(".body").forEach(a=>{
          C.move({n:a.id, z: +(a.style.transform.match(/slateZ\((-?\d+)px/)[1])-50});
        });
        C.move({n:"y", z: +(y.style.transform.match(/slateZ\((\d+)px/)[1])-50});
        flying = 0;
      }
    //}
  }
}