// Draw screen
draw_screen = () => {
  
  // Add "menu" class to body
  b.classList.add("menu");
  
  // HTML string
  var i, html = "";
  
  // Menu: Worlds list
  if(world == 0){
    html += `<h1>TITLE</h1>`;
    for(i in data){
      if(i > 0)
        html += `<div class="b w w${i} ${i == 1 ? "" : "lock"}" onclick="draw_screen(world=${i})">${svg[+i%5]}<h2>${i==5 ? "SPACE" : "World " + i}</h2><p>${i == 1 ? "0 / 100" : ("<span class=emoji>🔒</span> " + i * 20 + " stars to unlock")}</div></div>`
    }
  }
  
  // Menu: Levels list
  else if(level == 0){
    
    html += `<h1>World ${world}</h1><div id=back class="back" onclick="draw_screen(world=0)">&lt;</div>`;
    for(i in data[world]){
      if(i > 0)
        html += `<div class="b w${world} l l${i} ${i < 2 ? "" : "lock"}" onclick="draw_screen(level=${i})"><h2>Level ${i}</h2></div>`
    }
  }
  
  // Menu: Puzzles list
  else if(puzzle == 0){
    
    html += `<h1>World ${world} - Level ${level}</h1><div id=back class=back onclick="draw_screen(level=0)">&lt;</div>`;
    for(i in data[world][level]){
      if(i > 0)
        html += `<div class="b w${world} l l${i} p p${i} ${i < 2 ? "" : "lock"}" onclick="draw_puzzle(puzzle=${i})"><h2>${i}</h2></div>`
    }
  }
  
  // Else: no menu, draw current puzzle scene
  else {
    draw_puzzle();
    return;
  }
  
  // Render HTML
  b.innerHTML = html;

  // Fill the star svg with random dots if it's present (ex: in the Worlds menu)
  if(top.star){
    setTimeout(()=>{
      for(i=300;i--;){
        star.innerHTML += `<text x=${Math.random()*500} y=${Math.random()*500}>.`;
      }
    }, 50);
  }
};