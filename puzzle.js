// Puzzle size in tiles
w = 250;
h = 250;

// Puzzle
current_puzzle = {
  floor: [
    [0,1,1,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ],
  
  wall: [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,1,1,0,0],
    [0,1,0,0,0],
  ]
};

var w = 5;
var h = 5;
  
// Camera angles
camrx = 20;
camrz = 0;

// Draw current puzzle
draw_puzzle = () => {
  
  // Snake globals
  snake_position = [[-2,2,0]];
  head_angles = [270];
  head_angles_modulo = [270];
  head_angle = 270;
  head_angle_modulo = 270;
  snake_length = 5; // total length with head = this number + 1
  body_moves = 0;
  
  var i, j, head_position;
  
  // Remove menu class from body
  b.classList.remove("menu");

  // UI
  C.reset();  
  b.innerHTML = `<div id=viewport><div id=camera><div id=scene></div></div></div><div id=back class=back onclick="draw_screen(puzzle=0)">&lt;</div>`;
  
  // Scene
  camrx = 30;
  camrz = 0;
  C.camera({z:0,rx:camrx,rz:camrz});
  C.plane({n:"floor",w:1500,h:1500,css:"floor circle"});
  
  // Tree
  C.sprite({x:-180,y:-250,z:5,w:65,h:75,sx:2,sy:2,sz:2,css:"tree emoji",html:"🌳",o:"bottom center"});
  C.plane({x:-180,y:-250,z:1,rz:280,w:65,h:75,sx:2,sy:2.8,sz:2,css:"tree shadow emoji",html:"🌳",o:"bottom center"});
  
  // Puzzle
  C.group({n:"puzzlefloor",w:250,h:250,z:2});
  C.group({n:"puzzlewall",w:250,h:250,y:-125,z:2,rx:-90,o:"bottom"});
  
  if(current_puzzle.floor){
    for(j = 0; j < h; j++){
      for(i = 0; i < w; i++){
        C.plane({g:"puzzlefloor",n:"tile_"+i+"_"+j,x:25+i*50,y:25+j*50,w:55,h:55,css:"tile "+(current_puzzle.floor[j][i] ? "black" : "")});
      }
    }
  }
  
  if(current_puzzle.wall){
    for(j = 0; j < h; j++){
      for(i = 0; i < w; i++){
        C.plane({g:"puzzlewall",n:"wall_tile_"+i+"_"+j,x:25+i*50,y:25+j*50,w:55,h:55,css:"tile wall_tile "+(current_puzzle.wall[j][i] ? "black" : "")});
      }
    }
  }
  
  // Snake's head
  C.group({g:"puzzlefloor",n:"head",x:snake_position[0][0]*50+25,y:snake_position[0][1]*50+25,z:4});
  C.sprite({g:"head",n:"headcircle",x:0,y:0,w:50,h:50,z:25,css:"head circle"});
  C.group({g:"head",n:"head_decoration",w:50,h:50,z:25});
  C.group({g:"head_decoration",n:"head_decoration_inner",w:50,h:50,x:25,y:25,rz:head_angle});
  C.plane({g:"head_decoration_inner",x:25,y:15,z:27,w:30,h:15,rx:-20,css:"eyes emoji",html:"👀"});
  C.plane({g:"head_decoration_inner",x:25,y:53,z:3,w:13,h:20,rx:180,css:"tongue",html:"Y"});
  
  C.plane({n:"left",g:"head",x:-10,y:0,z:2,w:200,h:200,rz:135,css:"trigger",o:"top left"});
  C.plane({n:"up",g:"head",x:0,y:-10,z:2,w:200,h:200,rz:-135,css:"trigger",o:"top left"});
  C.plane({n:"right",g:"head",x:10,y:0,z:2,w:200,h:200,rz:-45,css:"trigger",o:"top left"});
  C.plane({n:"down",g:"head",x:0,y:10,z:2,w:200,h:200,rz:45,css:"trigger",o:"top left"});
  
  // Snake's body
  head_position = snake_position[0];
  for(i = 1; i < snake_length * 5 + 1; i++){
    C.plane({g:"puzzlefloor",n:"body" + (snake_length * 5 - i),x:(head_position[0] - +i/5)*50+25,y:head_position[1]*50+25,w:30,h:30,z:25,rx:-45,ry:5,css:"body circle " + (i%2 ? "odd" : ""),i:"afterBegin"});
    snake_position.unshift([head_position[0]-i/5, head_position[1], 0]);
  }
};

check_puzzle = () => {
  var i, j, val, snake_on_current_cell, ok = 1;
  var current_positions = snake_position.slice(-(snake_length + 1) * 5);
  if(current_puzzle.floor){
    for(j in current_puzzle.floor){
      for(i in current_puzzle.floor[j]){
        val = current_puzzle.floor[j][i];
        snake_on_current_cell = current_positions.find(a => a[0] == i && a[1] == j);
        
        // Not ok if there's a snake body part on a white cell
        if(val == 0){
          if(snake_on_current_cell){
            ok = 0;
            C.$("tile_"+i+"_"+j).classList.add("red");
          }
          else {
            C.$("tile_"+i+"_"+j).classList.remove("red");
          }
        }
        
        // Not ok if there's no snake body part on a black cell
        if(val == 1){
          if(!snake_on_current_cell){
            ok = 0;
            C.$("tile_"+i+"_"+j).classList.remove("blue");
          }
          else {
            C.$("tile_"+i+"_"+j).classList.add("blue");
          }
        }
      }
    }
  }
  
  if(current_puzzle.wall){
    for(j in current_puzzle.wall){
      for(i in current_puzzle.wall[j]){
        val = current_puzzle.wall[j][i];
        snake_on_current_cell = current_positions.find(a => a[0] == i &&  a[1] < h && a[2] == h - j - 1);
        
        // Not ok if there's a snake body part on a white cell
        if(val == 0){
          if(snake_on_current_cell){
            ok = 0;
            C.$("wall_tile_"+i+"_"+j).classList.add("red");
          }
          else {
            C.$("wall_tile_"+i+"_"+j).classList.remove("red");
          }
        }
        
        // Not ok if there's no snake body part on a black cell
        if(val == 1){
          if(!snake_on_current_cell){
            ok = 0;
            C.$("wall_tile_"+i+"_"+j).classList.remove("blue");
          }
          else {
            C.$("wall_tile_"+i+"_"+j).classList.add("blue");
          }
        }
      }
    }
  }
  if(ok) back.innerHTML = "OK";
}