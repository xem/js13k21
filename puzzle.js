// Puzzle size in tiles
w = 250;
h = 250;

// Camera angles
camrx = 20;
camrz = 0;

// Draw current puzzle
draw_puzzle = () => {
  
  var i, j;
  
  // Remove menu class from body
  b.classList.remove("menu");

  // UI
  C.reset();  
  b.innerHTML = `<div id=viewport><div id=camera><div id=scene></div></div></div><div id=back class=back onclick="drawmenu(puzzle=0)">&lt;</div>`;
  
  // Scene
  camrx = 20;
  camrz = 0;
  C.camera({z:0,rx:camrx,rz:camrz});
  C.plane({n:"floor",w:1500,h:1500,css:"floor circle"});
  
  // Tree
  C.sprite({x:-180,y:-250,z:5,w:65,h:75,sx:2,sy:2,sz:2,css:"tree emoji",html:"🌳",o:"bottom center"});
  C.plane({x:-180,y:-250,z:1,rz:280,w:65,h:75,sx:2,sy:2.8,sz:2,css:"tree shadow emoji",html:"🌳",o:"bottom center"});
  
  // Puzzle
  var w = 5;
  var h = 5;
  C.group({n:"board",w:250,h:250,z:2});
  for(j = 0; j < h; j++){
    for(i = 0; i < w; i++){
      C.plane({g:"board",x:25+i*50,y:25+j*50,w:55,h:55,css:"tile"});
    }
  }
  
  // Snake's head
  C.group({n:"head",x:0,y:0,z:4});
  C.sprite({g:"head",n:"headcircle",x:0,y:0,w:50,h:50,z:25,css:"head circle"});
  C.group({g:"head",n:"head_decoration",rz:0});
  C.plane({g:"head_decoration",x:0,y:-10,z:52,w:30,h:15,rx:-20,css:"eyes emoji",html:"👀"});
  C.plane({g:"head_decoration",x:0,y:38,z:28,w:13,h:20,rx:180,css:"tongue",html:"Y"});
  
  C.plane({n:"left",g:"head",x:-10,y:0,z:2,w:200,h:200,rz:135,css:"trigger",o:"top left"});
  C.plane({n:"up",g:"head",x:0,y:-10,z:2,w:200,h:200,rz:-135,css:"trigger",o:"top left"});
  C.plane({n:"right",g:"head",x:10,y:0,z:2,w:200,h:200,rz:-45,css:"trigger",o:"top left"});
  C.plane({n:"down",g:"head",x:0,y:10,z:2,w:200,h:200,rz:45,css:"trigger",o:"top left"});
  
  // Snake's body
  for(i = 1; i < snake_length*5 + 1; i++){
    C.plane({n:"body" + (snake_length * 5 - i),x:0,y:0-i*10,w:30,h:30,z:21,rx:-45,rz:4,css:"body circle " + (i%2 ? "odd" : "")});
    snake_position.unshift([0, 0-i/5, 0]);
  }
};