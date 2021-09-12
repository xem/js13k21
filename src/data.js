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
      [[0],[3],[2,2],[2,3],[3,2],[3,3],[0,3]]
    
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
      [[3],[0,2],[3,2]]
    
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
      [[3,0,.4],[3,1,.4],[3,2,.4],[3,3,.4],[3,4,.4]]
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
      [[1],[2],[2,1],[1,2],[2,2],[1,3],[1,4],[2,4],[3,4],[4,4]]
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
      16,
      
      // Bricks
      [[2,2],[2,4]]
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
      15
      
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
      16,
      
      // Bricks
      [[1,1],[3,3],[1,4]]
    ],
    
    // Puzzle 31
    [
    
      // Floor
      [
        0b1011011,
        //0b1000000,
        //0b1000000,
        //0b1000000,
      ],
      
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
      24,
      
      // Bricks
      [[0,0,2.4]]
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
      [[2],[0,2],[3,2],[3,3]]
      
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
      22,
      
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
      33,
      
      // Bricks
      [[1,0,2.4],[3,0,1.4],[4,0,2.4]]
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
      20
      
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
      [[2,0,.4],[3,0,.4],[2,1,.4],[3,1,.4],[2,2,.4],[3,2,.4],[2,3,.4],[3,3,.4]]
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
        0b1011000,
        0b1111111,
        0b1101011,
        0b1101110,
        0b1111100
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
      31,
     
      // Bricks
      [[0,3],[3,5],[6,4],[6,3],[5,5],[2,5],[1,4],[3,-1],[4,5],[2,0],[-1,2],[-1,1]]
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
      [[1,3],[2,3],[3,3],[4,3],[4,2],[4,1],[4]]
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
      [[1,2],[4,1]],
    
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
      [[2,1],[3,3]],
    
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
      [[0,2],[2,2]],
    
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
      [[1,0],[3,2]],
    
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
      [[2,1],[3,2]],
    
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
      [[0,0],[2,1]],
    
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
      [[1,2],[3,1]],
    
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
      [[4,1],[3,3]],
    
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
      [[2,0],[3,0]],
    
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
      [[2,2],[1,4]],
    
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
      [[0,0],[4,0]],
    
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
      [[2,2],[3,1]],
    
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
      12,
      
      // Bricks
      ,
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,2],[0,0]],
    
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
      [[1,0],[3,0]],
    
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
      [[0,2],[2,0,2]],
      
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
      [[3,0],[0,3]],
      
      // Portals 2
      [[0,0],[3,3]],
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
      [[1,0],[1,2]],
      
      // Portals 2
      [[0,1],[2,1]],
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
      25,
      
      // Bricks
      [[2,-1],[4,2],[1,4]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,1],[2,2]],
      
      // Portals 2
      [[2,1],[1,2]],
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
      [[2,0,3],[0,0]],
      
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
      [[0,0,3],[0,0]],
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
      [[0,0,1],[2,0]],
      
      // Portals 2

    ],
    
    // 25
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
      [[-1,2],[3,2],[-1,1],[3,1]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,1],[2,2]],
      
      // Portals 2
      [[2,0,1],[0,2]],
    ],
   
    
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
      [[0,2],[0,0,1]],
      
      // Portals 2
      [[1,0],[2,0,1]],
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
      25,
      
      // Bricks
      [[1,0,.4],[2,0,.4],[2,1,.4],[3,1,.4],[4,1,.4],[5,1,.4],[5,0,.4],[5,-1,.4]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[2,0,3],[4,0,1]],
      
      // Portals 2
      [[1,0,2],[3,0]],
    ],
    
    // 29
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
      [[1,3]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[0,0,1],[2,1]],
      
      // Portals 2
      [[0,1],[2,0,1]],
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
      [[0,0],[1,0],[2,3],[3,3],[-1,3],[-1,4],[2,0,3.4],[2,0,2.4],[3,0,2.4]],
      
      // Portals 1: [x,y,z] * 2 (z = 0: floor, z>0: wall)
      [[1,1],[2,2]],
      
      // Portals 2
      [[1,3],[3,0,3]],
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
        0b1000100,
        0b1000100,
        0b1000000,
        0b1000000,
        0b1000000,
        0b1000100,
        0b1000100,
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
      9,
      
      // Bricks
      [[-4,3],[-3,3],[-2,3],[-1,3],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3]],
      
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
        0b1001000,
        0b1001001,
        0b1000000,
        0b1001000,
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
      7,
      
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
        0b1000101,
        0b1000000,
        0b1000101,
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
      6,
      
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
        0b1000001,
        0b1000111,
        0b1000001,
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
      7,
      
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
        0b1000011,
        0b1000101,
        0b1000010,
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
      8,
      
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
        0b1000011,
        0b1000101,
        0b1000001,
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
      10,
      
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
        0b1000010,
        0b1000111,
        0b1000010,
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
      10,
      
      // Bricks
      [
        [-1,-1],[0,-1],[1,-1],[2,-1],[3,-1],
        [-1,0],[3,0],
        [3,1],
        [-1,2],[3,2],
        [-1,3],[0,3],[1,3],[2,3],[3,3],
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
        0b1000010,
        0b1000101,
        0b1000111,
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
      8,
      
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
        0b1000100,
        0b1000110,
        0b1000111,
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
      8,
      
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
        0b1000001,
        0b1001101,
        0b1000000,
        0b1000011,
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
      10,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 11
    [[81,64,74,91,81],,5,,10,13,,,,1],
    
    // 12
    [[112,112,99,99,112,112],,6,,14,16,,,,1],
    
    // 13
    [[72,78,77,79],,4,,11,13,[[0,0],[1,0],[2,0],[0,1],[1,2]],,,1],
    
    // 14
    [
    
      // Floor
      [
        0b1001011,
        0b1000011,
        0b1001101,
        0b1001110,
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
      13,
      
      // Bricks
      ,
      
      // Portals 1
      ,
      
      // Portals 2
      ,
      
      1
    ],
    
    // 15
    [[68,92,127,78,70,68],,6,,16,18,,,,1],
    
    // 16
    [[79,67,73,76],[67,73,76,79],4,,14,19,,,,1],
    
    // 17
    [[79,74,77,69],,4,,11,13,[[0,1],[2,1],[1,2]],,,1],
    
    // 18
    [[69,79,70,77],,4,,11,15,,,,1],
    
    // 19
    [[69,75,79,69],,4,,11,15,[[1,0],[3,0],[2,1],[1,3],[3,3]],,,1],
    
    // 20
    [[95,70,68,70,71],,5,,13,17,[[1,2]],,,1],
    
    // 21
    [[89,83,83,88,81],,5,,13,22,[[2,1],[3,2],[2,3],[3,4]],,,1],
    
    // 22
    [[89,81,65,67,95],,5,,13,15,[[2,0],[3,1],[1,2],[4,2],[2,3]],,,1],
    
    // 23
    [[95,80,87,84,85],,5,,15,17,,,,1],
    
    // 24
    [[92,88,113,113,88,92],,6,6,16,18,[[0,0],[1,0],[5,0],[0,1],[5,1],[0,4],[5,4],[0,5],[1,5],[5,5]],,,1],  // ***
    
    // 25
    [[70,79,64,71],,4,,9,12,[[0,0],[3,0],[3,3]],[[0,1],[1,3]],,1],
    
    // 26 teleporters and wall
    [[95,78,68,64,64],[64,68,78,95,95],5,,18,22,,[[1,1],[3,0,2]],[[3,1],[1,0,2]],1],
    
    // 27
    [[74,95,85,95,74],,5,5,17,19,[[1,2],[3,2]],,,1],
    
    // 28
    [[119,92,87,85,85,117],,6,6,22,26,[[3,0],[1,1],[5,1],[3,2],[1,3],[5,-1]],,,1],
    
    // 29
    [[97,127,101,103,96,64],,6,6,16,26,[[1,2],[3,2],[4,2],[4,4],[4,5],[5,5],[6,5],[6,4]],,,1], // ****
    
    // 30
    [[127,81,81,95,82,126],,6,6,22,25,[[1,1],[2,1],[3,1],[5,1],[1,2],[2,2],[3,2],[5,2],[5,3],[2,4],[3,4],[5,4]],,,1], // ****
    
    // 31
    [[87,65,65,81,95],,5,,13,15,[[3,0],[4,1],[4,2]],,,1],
    
    // 32
    [[68,94,127,94,94,68],,6,,20,24,,,,1],
 
    // 33
    [[99,97,112,120,124,127],,6,,20,23,,,,1],
    
    // 34
    [[65,67,71,79,95],,5,,15,17,,,,1],
    
    // 35 teleporters and wall
    [[95,95,91,81,65],[64,80,81,91,95],5,,24,28,[[2,2],[1,3],[3,3],[4,4],[4,0,4.4],[0,0,3.4],[1,0,2.4],[3,0,2.4],[2,0,1.4]],[[0,0],[0,0,2]],[[4,1],[3,0,1]],1],
    

    // Easter egg
    [[93,84,68,85,95],,5,,15,22,[[1,0],[0,1],[0,2],[4,2]],,,1], // J
    [[79,67,79,72,78],,4,5,14,18,[[-1,2],[-1,3],[0,5],[1,5],[2,1],[3,1],[0,3],[1,3],[2,3],[0,4]],,,1], // S
    [[95,66,94,78,70],,5,,15,19,[[2,1],[3,1],[4,1],[4,3],[3,4],[4,4],[5,3],[5,2],[5,1]],,,1], // 1
    [[95,65,71,81,95],,5,5,16,19,[[1,1],[2,1],[3,1],[4,1],[3,2],[4,2],[1,3],[2,3],[3,3]],,,1], // 3
    [[115,118,92,84,118,114],,6,6,20,24,,,,1], // K
    
    [[79,83,87,80,95],,5,,17,19,[[4,0]],,,1],// G
    [[81,95,81,83,95],,5,,17,19,,,,1], // A
    [[81,81,85,85,95],,5,,15,22,[[1,1],[2,1],[3,1],[1,2],[3,2],[1,3],[3,3]],,,1],// M
    [[94,88,92,80,95],,5,5,15,19,[[0,0],[0,1],[1,1],[2,1],[0,2],[1,2],[0,3],[1,3],[2,3],[3,3]],,,1], // E
    [[94,70,78,76,79],,5,5,15,19,[[3,1],[1,3]],,,1], // S
  ],
  
  // World 4
  [
    // 0
    ,
    
    // 1
    [,[64,64,64,64,78],5,5,6,9],
    
    // 2
    [,[64,64,66,70],4,4,6,9],
    
    // 3
    [,[64,64,64,74,78],5,5,6,10],
    
    // 4
    [,[64,64,64,78,68],5,5,6,10],
    
    // 5
    [[64,70,70,64],[64,64,70,70],4,4,6,9],
    
    // 6
    [[64,70,70,64],[64,66,70,66],4,4,6,9],
    
    // 7
    [[64,70,68,64],[64,64,70,70],4,4,6,10],
    
    // 8
    [[64,66,70,64],[64,70,66,66],4,4,7,11],
    
    // 9
    [,[64,64,66,70,78],5,5,8,11],
    
    // 10
    [,[64,64,72,92,70],6,5,8,11],
    
    // 11
    [,[64,64,66,78,66],5,5,7,10],
    
    // 12
    [[64,68,76,70,64],[64,64,64,68,78],5,5,8,12],
    
    // 13
    [[64,78,74,64],[64,64,74,78],5,4,9,12],
    
    // 14
    [[64,68,70,64],[64,68,70,70],4,4,8,11],
    
    // 15
    [[64,78,70,68,64],[64,64,64,76,70],5,5,8,12],
    
    
    // 3D + wrap, 8
    
    
    // 16
    [[73,64,64,73],[73,64,64,73],4,4,8,11,,,,1],
    
    // 17
    [[70,64,64,70],[64,70,70,70],4,4,8,12,,,,1],
    
    // 18
    [[64,79,70,64],[64,66,79,68],4,4,8,12,,,,1],
    
    // 19
    [[64,78,76,64],[70,66,64,76],4,4,8,13,,,,1],
    
    // 20 nowrap
    [[72,76,70,67],[67,70,76,72],4,4,11,17],
    
    // 21
    [[75,64,72,72],[75,64,64,72],4,4,8,13,,,,1],
    
    // NO WRAP, 12
    
    // 22
    [,[64,68,95,68],5,4,11,14],
    
    // 23
    [,[64,66,70,64],4,4,12,16,[[1,1]]],
    
    // 24
    [,[64,76,88,78,72],5,5,12,16],
    
    // 25
    [[64,64,71,95,64],[64,64,68,78,95],5,5,12,18],
    
    // 26
    [[64,76,79,64],[65,67,71,79],4,4,12,17],
    
    // 27
    [[71,67,65,64],[64,65,67,71],4,4,13,15],
    
    // 28 wrap
    [[64,73,73,64],[65,73,73,72],4,4,12,15,,,,1],
    
    // 29
    [[64,67,79,76],[64,68,79,66],4,4,12,16,,,,1],
    
    // 30
    [[64,78,67,66,64],[66,67,66,78,66],5,5,12,16,,,,1],
    
    // 31 wrap
    [[64,67,83,64,64],[67,81,80,81,67],5,5,15,17,,,,1],
    
    // 32
    [[67,65,64,81,91],[91,81,64,65,67],5,5,13,17,,,,1],
    
    // TODO records below, reordering
    // 33
    [[69,70,71],[71,70,69],3,3,16,18,,,,1], // ***
    
    // 34
    [[71,71,71],[71,71,71],3,3,11,13], // ***
    
    // 35
    [[66,79,70,66],[79,73,77,79],4,4,20,24], // ***
    
    // 36
    [[71,69,71],[71,69,71],3,3,21,24], // ****

    // 36
    //[[79,77,75,79],[79,77,75,79],4,4,49,55], // ?
    
    
    // 38 X
    //[[78,74,91,81,81],[81,81,91,74,78],5,5,37,45], // ***
    
    // 39 Y todo add a tile at 0 0 3
    //[[72,75,73,79],[73,73,73,79],4,4,34,],
    
    // 36 Z
    //[[68,70,67,81,95],[95,81,88,72,76],5,5,25,],
    
    // 37 easter egg OU TODO longer snake
    [[79,75,73,79],[79,72,72,71],4,4,16,18,,,,1],
    
    // 38  KY
    [[72,77,70,79],[79,74,74,75],4,4,26,29,,,,1],
    
    // 39 AN
    [[79,69,69,79],[79,68,66,79],4,4,30,32,,,,1],
    
    // 40 TH
    [[65,79,79,65],[64,79,70,79],4,4,24,26,,,,1],
    
  ],

];