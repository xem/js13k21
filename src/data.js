// Structure for each puzzle (* = optional)
// [
//  floor*,
//  wall*,
//  width,
//  height*,
//  snake_length,
//  moves,
//  bricks?,
//  portals_1*,
//  portals_2*,
//  wrap*
//]


data = [

  // World 0 = menu
  ,
  
  // World 1
  [
  
    // No puzzle 0
    ,
    
    // Puzzle 1
    [
    
      // Floor
      [
        0b1000000,
        0b1000000,
        0b1001110
      //0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      3,
      
      // Moves
      6
      
      // Bricks
    
    ],
    
    // Puzzle 2
    [
    
      // Floor
      [
        0b1000000,
        0b1000110,
        0b1001100
      //0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      4,
      
      // Snake length
      4,
      
      // Moves
      8
      
      // Bricks
    
    ],
    
    // Puzzle 3
    [
    
      // Floor
      [
        0b1000000,
        0b1000110,
        0b1000110
      //0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      4,
      
      // Moves
      7
      
      // Bricks
    
    ],
    
    // Puzzle 4
    [
    
      // Floor
      [
        0b1000000,
        0b1000100,
        0b1001100,
        0b1001100,
        0b1000100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      11
      
      // Bricks
    
    ],
    
    // Puzzle 5
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1000110,
        0b1000100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      11,
      
      // Bricks
    
    ],
    
    
    // Puzzle 6
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1001110,
        0b1000100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      7,
      
      // Moves
      10,
      
      // Bricks
    
    ],
    
    // Puzzle 7
    [
    
      // Floor
      [
        0b1000000,
        0b1011000,
        0b1000000,
        0b1011000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      7,
      
      // Moves
      13,
      
      // Bricks
    
    ],
    
    // Puzzle 8
    [
    
      // Floor
      [
        0b1000000,
        0b1000110,
        0b1011110,
        0b1011000,
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      5,
      
      // Snake length
      8,
      
      // Moves
      11,
      
      // Bricks
    
    ],
    
    // Puzzle 9
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1001110,
        0b1000110
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      8,
      
      // Moves
      11,
      
      // Bricks
    
    ],
    
    // Puzzle 10
    [
    
      // Floor
      [
        0b1001110,
        0b1001010
      //0b1000000
      //0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      7,
      
      // Moves
      11,
      
      // Bricks
    
    ],
    
    // Puzzle 11
    [
    
      // Floor
      [
        0b1011010,
        0b1001000
      //0b1000000
      //0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      3,
      
      // Snake length
      8,
      
      // Moves
      13,
      
      // Bricks
    
    ],
    
    // Puzzle 12
    [
    
      // Floor
      [
        0b1000101,
        0b1000110,
        0b1000010
      //0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      8,
      
      // Moves
      11,
      
      // Bricks
    
    ],
    
    // Puzzle 13
    [
    
      // Floor
      [
        0b1000110,
        0b1001111,
        0b1000011,
        0b1000010
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      9,
      
      // Moves
      15,
      
      // Bricks
      [[0,0],[3,0],[2,2],[2,3],[3,2],[3,3],[0,3]]
    
    ],
    
    // Puzzle 14
    [
    
      // Floor
      [
        0b1000111,
        0b1001111,
        0b1000110
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      3,
      
      // Snake length
      9,
      
      // Moves
      15,
      
      // Bricks
      [[3,0],[0,2],[3,2]]
    
    ],
    
    // Puzzle 15
    [
    
      // Floor
      [
        0b1000111,
        0b1000011,
        0b1000001
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      9,
      
      // Moves
      11,
      
      // Bricks
    
    ],
    
    // Puzzle 16
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b10000000,
        0b10000000,
        0b10111110,
        0b10100010,
        0b11100011
      ],
      
      // Width
      7,
      
      // Height
      5,
      
      // Snake length
      11,
      
      // Moves
      15,
      
      // Bricks
      [[3,0],[3,1],[3,2],[3,3],[3,4]]
    ],
    
    // Puzzle 17
    [
    
      // Floor
      [
        0b1000001,
        0b1000011,
        0b1000001,
        0b1000001,
        0b1000001
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      9,
      
      // Moves
      13,
      
      // Bricks
      [[1,0],[2,0],[2,1],[1,2],[2,2],[1,3],[1,4],[2,4],[3,4],[4,4]]
    ],
    
    // Puzzle 18
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1011110,
        0b1011100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      5,
      
      // Snake length
      10,
      
      // Moves
      13,
      
      // Bricks
      [[1,3],[4,1]]

    ],
    
    // Puzzle 19
    [
    
      // Floor
      [
        0b1000100,
        0b1001100,
        0b1000110,
        0b1001100
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      10,
      
      // Moves
      16,
      
      // Bricks
      [[1,1],[0,1],[0,2],[0,3],[1,3]]
    ],
    
    // Puzzle 20
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1001010,
        0b1001110,
        0b1001110
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      6,
      
      // Snake length
      11,
      
      // Moves
      14,
      
      // Bricks
      [[2,2]]
      
    ],
    
    // Puzzle 21
    [
    
      // Floor
      [
        0b1000000,
        0b1011110,
        0b1011110,
        0b1001100,
        0b1000100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      15,
      
      // Bricks
      [[1,3],[1,4],[1,5],[2,5],[3,5],[3,4]]
      
    ],
    
    // Puzzle 22
    [
    
      // Floor
      [
        0b1000011,
        0b1000111,
        0b1001111,
        0b1001100
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      16,
      
      // Bricks
      
    ],
    
    // Puzzle 23
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1001000,
        0b1001110,
        0b1001111,
        0b1000111
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      17,
      
      // Bricks
      
    ],
    
    // Puzzle 24
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1001010,
        0b1001110,
        0b1001010,
        0b1001110
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      7,
      
      // Snake length
      13,
      
      // Moves
      16
      
      // Bricks
    ],

    // Puzzle 25
    [
    
      // Floor
      [
        0b1000101,
        0b1000000,
        0b1000101
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      15,
      
      // Bricks
      
    ],
    
    // Puzzle 26
    [
    
      // Floor
      [
        0b1000000,
        0b1000110,
        0b1001110,
        0b1001110,
        0b1001110,
        0b1000110
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      7,
      
      // Snake length
      13,
      
      // Moves
      16,
      
      // Bricks
      [[3,1],[3,5]]
    ],
    
    // Puzzle 27
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000110,
        0b1001111,
        0b1001111,
        0b1000111
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      17
      
      // Bricks
      
    ],
    
    // Puzzle 28
    [
    
      // Floor
      [
        0b1000000,
        0b1000110,
        0b1001110,
        0b1011110,
        0b1011110
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      16,
      
      // Bricks
      [[3,1],[4,1],[4,2]]
    ],
    
    // Puzzle 29
    [
    
      // Floor
      [
        0b1000110,
        0b1000110,
        0b1000110,
        0b1000000
      ],
      
      // Wall
      [
        0b1000110,
        0b1000110,
        0b1000110,
        0b1000110
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      12,
      
      // Moves
      15,
      
      // Bricks
    ],

    // Puzzle 30
    [
    
      // Floor
      [
        0b1000000,
        0b1011100,
        0b1011110,
        0b1010110,
        0b1011100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      16
      
      // Bricks
    ],
    
    // Puzzle 31
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000000,
        0b1000000,
        0b1000000,
        0b1011011
      ],
      
      // Width
      5,
      
      // Height
      4,
      
      // Snake length
      13,
      
      // Moves
      18
      
      // Bricks
    ],
    
    // Puzzle 32
    [
    
      // Floor
      [
        0b1000000,
        0b1000110,
        0b1001110,
        0b1011010,
        0b1011110,
        0b1011100
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      7,
      
      // Snake length
      15,
      
      // Moves
      20,
      
      // Bricks
      [[2,3]]
      
    ],
    
    // Puzzle 33
    [
    
      // Floor
      [
        0b1001110,
        0b1001110,
        0b1000010,
        0b1000110,
        0b1000000
      ],
      
      // Wall
      [
        0b1001110,
        0b1000010,
        0b1001110,
        0b1001000,
        0b1001110
      ],
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      15,
      
      // Moves
      22
      
      // Bricks
      
    ],

    // Puzzle 34
    [
    
      // Floor
      [
        0b1011000,
        0b1011111,
        0b1011101,
        0b1000111,
        0b1000010
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      15,
      
      // Moves
      18,
      
      // Bricks
      [[1,2],[0,4],[2,4],[1,5]]
      
    ],
    
    // Puzzle 35
    [
    
      // Floor
      ,
      
      // Wall
       [
        0b1011111,
        0b1010111,
        0b1010010,
        0b1011110,
        0b1000000
      ],
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      15,
      
      // Moves
      22
      
      // Bricks
      
    ],
    
    // Puzzle 36
    [
    
      // Floor
      [
        0b1001011,
        0b1001111,
        0b1000110,
        0b1000111
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      15,
      
      // Moves
      18,
      
      // Bricks
      [[2,0],[0,2],[3,2],[3,3]]
      
    ],
    
    // Puzzle 37
    [
    
      // Floor
      [
        0b1011100,
        0b1011110,
        0b1001110,
        0b1000111,
        0b1000110
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      15,
      
      // Moves
      26,
      
      // Bricks
      [[0,2],[-1,3],[0,4]]
      
    ],
    
    // Puzzle 38
    [
    
      // Floor
      [
        0b1001010,
        0b1001011,
        0b1001110,
        0b1001010
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      16,
      
      // Moves
      19
      
      // Bricks
      
    ],

    
    // Puzzle 39
    [
    
      // Floor
      [
        0b1000110,
        0b1001111,
        0b1011111,
        0b1010110,
        0b1011100
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      17,
      
      // Moves
      19,
      
      // Bricks
      [[3,3]]
    ],
    
    // Puzzle 40
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1101111,
        0b1101101,
        0b1111111,
        0b1001100
      //0b1000000
      //0b1000000
      ],
      
      // Width
      6,
      
      // Height
      ,
      
      // Snake length
      17,
      
      // Moves
      25
      
      // Bricks
    ],
    
    // Puzzle 41
    [
    
      // Floor
      [
        0b1001001,
        0b1001111,
        0b1001001,
        0b1001101
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      17,
      
      // Moves
      21
      
      // Bricks
    ],
    
    // Puzzle 42
    [
    
      // Floor
      [
        0b1000010,
        0b1000111,
        0b1000010
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      15,
      
      // Moves
      18
      
      // Bricks
      
    ],
    
    // Puzzle 43
    [
    
      // Floor
      [
        0b1000001,
        0b1000111,
        0b1000110,
        0b1001101
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      16,
      
      // Moves
      20,
      
      // Bricks
      
    ],
    
    // Puzzle 44
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b0000000,
        0b1111111,
        0b1010101
      ],
      
      // Width
      7,
      
      // Height
      3,
      
      // Snake length
      17,
      
      // Moves
      29
      
      // Bricks
    ],
    
    // Puzzle 45
    [
    
      // Floor
      [
        0b1001111,
        0b1001011,
        0b1001101,
        0b1001111
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      17,
      
      // Moves
      19
      
      // Bricks
    ],
    
    // Puzzle 46
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000000,
        0b1000000,
        0b1001000,
        0b1011110,
        0b1010011
      ],
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      17,
      
      // Moves
      26,
      
      // Bricks
      [[2,0,.1],[3,0,.1],[2,1,.1],[3,1,.1],[2,2,.1],[3,2,.1],[2,3,.1],[3,3,.1]]
    ],
    
    // Puzzle 47
    [
    
      // Floor
      [
        0b1001111,
        0b1001000,
        0b1001001,
        0b1001111,
      //0b1000000
      ],
      
      // Wall
      [
        0b1001111,
        0b1001111,
        0b1001001,
        0b1001001,
        0b1001111
      ],
      
      // Width
      4,
      
      // Height
      5,
      
      // Snake length
      20,
      
      // Moves
      22
      
      // Bricks
    ],
   
    // Puzzle 48
    [
    
      // Floor
      [
        0b1001101,
        0b1000110,
        0b1001011,
        0b1001101
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      20,
      
      // Moves
      24,
      
      // Bricks
      [[1,-1],[0,1],[-1,1],[3,1],[1,3]]
    ],
    
    // Puzzle 49
    [
    
      // Floor
      [
        0b1000110,
        0b1111111,
        0b1110101,
        0b1011101,
        0b1001111
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      5,
      
      // Snake length
      20,
      
      // Moves
      29,
     
      // Bricks
      [[-1,1,0],[-1,2,0],[-1,3,0],[-1,4,0],[-1,5,0],[0,5,0],[1,5,0],[2,5,0],[3,5,0],[4,5,0],[4,4,0],[1,-1,0],[2,-1,0],[3,-1,0],[1,5,0],[3,0,0],[6,2,0],[6,1,0]]
    ],
    
    // Puzzle 50
    [
    
      // Floor
      [
        0b1001111,
        0b1001011,
        0b1001111
      //0b1000000
      ],
      
      // Wall
      [
        0b1001111,
        0b1001111,
        0b1001101,
        0b1001111
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      20,
      
      // Moves
      22,
      
      // Bricks
      [[1,3],[2,3],[3,3],[4,3],[4,2],[4,1],[4,0]]
    ],    
  ],
  
  // World 2
  [
    // No puzzle 0
    ,
    
    // Puzzle 1
    [
    
      // Floor
      [
        0b1000000,
        0b1010000,
        0b1010011,
        0b1010000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      7,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,2,0],[4,1,0]],
    
    ],
    
    // 2
    [
    
      // Floor
      [
        0b1000000,
        0b1000100,
        0b1001110,
        0b1001000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      8,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,1,0],[3,3,0]],
    
    ],
    
    // 3
    [
    
      // Floor
      [
        0b1000000,
        0b1001000,
        0b1001111,
        0b1000000
      //0b1000000
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      10,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,2,0],[2,2,0]],
    
    ],
    
    // 4
    [
    
      // Floor
      [
        0b1000010,
        0b1000110,
        0b1001110,
        0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      9,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,0,0],[3,2,0]],
    
    ],
    
    // 5
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1001110,
        0b1000000,
      //0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      4,
      
      // Snake length
      6,
      
      // Moves
      10,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,1,0],[3,2,0]],
    
    ],
    
    // 6
    [
    
      // Floor
      [
        0b1000001,
        0b1000111,
        0b1000010,
        0b1000010,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      9,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,0],[2,1,0]],
    
    ],
    
    // 7
    [
    
      // Floor
      [
        0b1000000,
        0b1001110,
        0b1001110,
        0b1000100,
      //0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      7,
      
      // Moves
      12,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,2,0],[3,1,0]],
    
    ],
    
    // 8
    [
    
      // Floor
      [
        0b1000000,
        0b1010000,
        0b1000000,
        0b1011100,
      //0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      7,
      
      // Moves
      12,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[4,1,0],[3,3,0]],
    
    ],
    
    // 9
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000111,
        0b1000101,
        0b1000111,
      ],
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      8,
      
      // Moves
      12,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,0,1],[0,0,1]],
    
    ],
    
    // 10
    [
    
      // Floor
      [
        0b1001110,
        0b1001010,
        0b1000000,
        0b1000000,
      //0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      7,
      
      // Moves
      11,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,0,0],[3,0,0]],
    
    ],
    
    // 11
    [
    
      // Floor
      [
        0b1000000,
        0b1001000,
        0b1001100,
        0b1011100,
        0b1000110,
      //0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      6,
      
      // Height
      ,
      
      // Snake length
      8,
      
      // Moves
      14,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,2,0],[1,4,0]],
    
    ],
    
    // 12
    [
    
      // Floor
      [
        0b1011011,
        0b1000001,
        0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      3,
      
      // Snake length
      8,
      
      // Moves
      11,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,0],[4,0,0]],
    
    ],
    
    // 13
    [
    
      // Floor
      [
        0b1001110,
        0b1000110,
        0b1000100,
      //0b1000000,
      //0b1000000,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      8,
      
      // Moves
      17,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,2,0],[3,1,0]],
    
    ],
    
    // 14
    [
    
      // Floor
      [
        0b1000011,
        0b1000001,
        0b1000100,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      9,
      
      // Moves
      13,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,2,0],[0,0,0]],
    
    ],
    
    // 15
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000000,
        0b1000100,
        0b1011111,
      ],
      
      // Width
      5,
      
      // Height
      3,
      
      // Snake length
      9,
      
      // Moves
      13,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,0,0],[3,0,0]],
    
    ],
    
    // 16
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000010,
        0b1000111,
        0b1000101,
      ],
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      9,
      
      // Moves
      16,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,0,1],[1,0,2]],
      
      // Portals 2

    ],
    
    
    // 17
    [
    
      // Floor
      [
        0b1000111,
        0b1000110,
        0b1000111,
      ],
      
      // Wall
      [
        0b1000111,
        0b1000011,
        0b1000111,
      ],
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      10,
      
      // Moves
      14,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,2,0],[2,0,2]],
      
      // Portals 2

    ],
    
    // 18
    [
    
      // Floor
      [
        0b1001111,
        0b1001000,
        0b1001001,
        0b1011001,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      9,
      
      // Moves
      11,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[3,0,0],[0,3,0]],
      
      // Portals 2
      [[0,0,0],[3,3,0]],
    ],
    
    // 19
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1001101,
        0b1001101,
        0b1000111,
        0b1000011,
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      15,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,3],[3,0,2]],
      
      // Portals 2
      [[0,0,1],[2,0,2]],
    ],
    
    // 20
    [
    
      // Floor
      [
        0b1000110,
        0b1000111,
        0b1000111,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      13,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,0,0],[1,2,0]],
      
      // Portals 2
      [[0,1,0],[2,1,0]],
    ],
    
    // 21
    [
    
      // Floor
      [
        0b1001011,
        0b1001110,
        0b1000111,
        0b1001101,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      16,
      
      // Moves
      26,
      
      // Bricks
      [[2,-1,0],[4,2,0],[1,4,0]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,1,0],[2,2,0]],
      
      // Portals 2
      [[2,1,0],[1,2,0]],
    ],
    
    // 22
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1001111,
        0b1001001,
        0b1001001,
        0b1001111,
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      12,
      
      // Moves
      19,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,0,3],[0,0,0]],
      
      // Portals 2
      [[0,0,1],[3,0,1]],
    ],
    
    // 23
     [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000101,
        0b1001111,
        0b1001110,
        0b1000011,
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      16,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,2],[2,0,3]],
      
      // Portals 2
      [[0,0,3],[0,0,0]],
    ],
    
    // 24
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000000,
        0b1000010,
        0b1000111,
        0b1001111,
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      20,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,1],[2,0,0]],
      
      // Portals 2

    ],
    
    // 25
    [
    
      // Floor
      [
        0b1000101,
        0b1000101,
        0b1000101,
      ],
      
      // Wall
      [
        0b1000101,
        0b1000101,
        0b1000101,
      ],
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      21,
      
      // Bricks
      [[1,3,0]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,1],[2,1,0]],
      
      // Portals 2
      [[0,1,0],[2,0,1]],
    ],
    
    // 25
   
    
    // 26
    [
    
      // Floor
      [
        0b1000111,
        0b1000111,
        0b1000111,
      ],
      
      // Wall
      [
        0b1000111,
        0b1000111,
        0b1000111,
      ],
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      16,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,2,0],[0,0,1]],
      
      // Portals 2
      [[1,0,0],[2,0,1]],
    ],
    
    // 27
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1001111,
        0b1000101,
        0b1001111,
        0b1001110,
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      18,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,2],[2,0,2]],
      
      // Portals 2
      ,
    ],
    
    // 28
    [
    
      // Floor
      ,
      
      // Wall
      [
        0b1000000,
        0b1001100,
        0b1001111,
        0b1011111,
        0b1011000,
      ],
      
      // Width
      5,
      
      // Height
      ,
      
      // Snake length
      13,
      
      // Moves
      ,
      
      // Bricks
      [[1,0,.1],[2,0,.1],[2,1,.1],[3,1,.1],[4,1,.1],[5,1,.1],[5,0,.1],[5,-1,.1]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,0,3],[4,0,1]],
      
      // Portals 2
      [[1,0,2],[3,0,0]],
    ],
    
    // 29
    [
    
      // Floor
      [
        0b1000101,
        0b1000101,
        0b1000101,
        0b1000101,
      ],
      
      // Wall
      [
        0b1000000,
        0b1000000,
        0b1000101,
        0b1000101,
      ],
      
      // Width
      3,
      
      // Height
      4,
      
      // Snake length
      13,
      
      // Moves
      20,
      
      // Bricks
      [[-1,2,0],[3,2,0],[-1,1,0],[3,1,0]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,1],[2,2,0]],
      
      // Portals 2
      [[2,0,1],[0,2,0]],
    ],
    
    // 30
    [
    
      // Floor
      [
        0b1001000,
        0b1000011,
        0b1001100,
        0b1000011,
      ],
      
      // Wall
      [
        0b1001000,
        0b1000000,
        0b1001000,
        0b1001111,
      ],
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      25,
      
      // Moves
      45,
      
      // Bricks
      [[0,0,0],[1,0,0],[2,3,0],[3,3,0],[-1,3,0],[-1,4,0],[2,0,3],[2,0,2],[3,0,2]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,1,0],[2,2,0]],
      
      // Portals 2
      [[1,3,0],[3,0,3]],
    ],
    
  ],
  
  // World 3
  [
  
    // 0
    ,
    
    // 1
    [
    
      // Floor
      [
        0b10000100,
        0b10000100,
        0b10000000,
        0b10000000,
        0b10000000,
        0b10000100,
        0b10000100,
      ],
      
      // Wall
      ,
      
      // Width
      5,
      
      // Height
      7,
      
      // Snake length
      4,
      
      // Moves
      ,
      
      // Bricks
      [[-2,3],[-1,3],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3]],
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 2
    [
    
      // Floor
      [
        0b10001000,
        0b10001001,
        0b10000000,
        0b10001000,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      4,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 3
    [
    
      // Floor
      [
        0b10000101,
        0b10000000,
        0b10000101,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      4,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 4
    [
    
      // Floor
      [
        0b10000011,
        0b10000101,
        0b10000010,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 5
    [
    
      // Floor
      [
        0b10000001,
        0b10000111,
        0b10000001,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 6
    [
    
      // Floor
      [
        0b10000011,
        0b10000101,
        0b10000001,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 7
    [
    
      // Floor
      [
        0b10000010,
        0b10000111,
        0b10000010,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      5,
      
      // Moves
      ,
      
      // Bricks
      [
        [-1,-1,0],[0,-1,0],[1,-1,0],[2,-1,0],[3,-1,0],
        [-1,0,0],[3,0,0],
        [3,1,0],
        [-1,2,0],[3,2,0],
        [-1,3,0],[0,3,0],[1,3,0],[2,3,0],[3,3,0],
      ],
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 8
    [
    
      // Floor
      [
        0b10000010,
        0b10000101,
        0b10000111,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 9
    [
    
      // Floor
      [
        0b10000100,
        0b10000110,
        0b10000111,
      ],
      
      // Wall
      ,
      
      // Width
      3,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 10
    [
    
      // Floor
      [
        0b10000001,
        0b10001101,
        0b10000000,
        0b10000011,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      6,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 11
    [
    [136,142,141,143],
    ,
    4,
    4,
    11,
    ,
    [[0,0,0],[1,0,0],[2,0,0],[0,1,0],[1,2,0]],
    ,
    ,
    1
    ],
    
    // 12
    [
    
      // Floor
      [
        0b10001011,
        0b10000011,
        0b10001101,
        0b10001110,
      ],
      
      // Wall
      ,
      
      // Width
      4,
      
      // Height
      ,
      
      // Snake length
      11,
      
      // Moves
      ,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    
    
    
    
    
    
    
    
  ],
  
  // World 4
  [,],
  
  // World 5
  [,],

];