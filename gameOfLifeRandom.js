let countCreateWorld = 0

while(countCreateWorld < 5) {

if(countCreateWorld == 0) {
  var world = [];
  function createWorld(height, width) {
    for(let y=0; y < height; y++) {
      world.push([]);
      for (let x=0; x < width; x++) {
        let randomZeroOne = Math.floor(Math.random() * 2);
        world[y].push(randomZeroOne);
      }
    }
    return world;
  }
console.log(createWorld(6, 6));
}

  function countNeighbours(world, x, y) {
    let count = 0;
    let firstArray = world[0]
    let lastElementIndex = firstArray.length-1

    // diagonal
    // the most upleft
    if (x === 0 && y === 0 && world.length === 1){
      if (world[y][x+1] === 1) count++ // right
    }
    if (x === 0 && y === 0 && world.length > 1) {
      if (world[y][x+1] === 1) count++ // right
      if (world[y+1][x+1] === 1) count++ //downright
      if (world[y+1][x] === 1) count++ // below
    }

    // the most upright
    if (x === lastElementIndex && y === 0 && world.length === 1) {
      if (world[y][x-1] === 1) count++ // left
    }
    if (x === lastElementIndex && y === 0 && world.length > 1) {
      if (world[y][x-1] === 1) count++ // left
      if (world[y+1][x-1] === 1) count++ // downleft
      if (world[y+1][x] === 1) count++ // below
    }
    // the most downright
    if (x === lastElementIndex && y === world.length-1 && world.length > 1) {
      if (world[y][x-1] === 1) count++ // left
      if (world[y-1][x-1] === 1) count++ //upleft
      if (world[y-1][x] === 1) count++ // above
    }

    // the most downleft
    if (x === 0 && y === world.length-1 && world.length > 1) {
      if (world[y-1][x] === 1) count++ // above
      if (world[y-1][x+1] === 1) count++ // upright
      if (world[y][x+1] === 1) count++ // right
    }

    // border
    // left
    if (x === 0 && world.length > 1 && y !== 0 && y !== world.length-1) {
      if (world[y-1][x] === 1) count++ // above
      if (world[y-1][x+1] === 1) count++ // upright
      if (world[y][x+1] === 1) count++ // right
      if (world[y+1][x+1] === 1) count++ //downright
      if (world[y+1][x] === 1) count++ // below
    }

    // above
    if (x > 0 && y === 0 && world.length > 1 && x !==0 && x !== lastElementIndex) {
      if (world[y][x-1] === 1) count++ // left
      if (world[y+1][x-1] === 1) count++ // downleft
      if (world[y+1][x] === 1) count++ // below
      if (world[y+1][x+1] === 1) count++ //downright
      if (world[y][x+1] === 1) count++ // right
    }

    // right
    if (x === lastElementIndex && world.length > 1 && y !==0 && y !== world.length-1) {
      if (world[y-1][x] === 1) count++ // above
      if (world[y-1][x-1] === 1) count++ //upleft
      if (world[y][x-1] === 1) count++ // left
      if (world[y+1][x-1] === 1) count++ // downleft
      if (world[y+1][x] === 1) count++ // below
    }

    // below
    if (y === world.length-1 && world.length > 1 && x !== 0 && x!== lastElementIndex) {
      if (world[y][x-1] === 1) count++ // left
      if (world[y-1][x-1] === 1) count++ //upleft
      if (world[y-1][x] === 1) count++ // above
      if (world[y-1][x+1] === 1) count++ // upright
      if (world[y][x+1] === 1) count++ // right
    }

    // not border
    if (x !==0 && x !== lastElementIndex && world.length === 1) {
      if (world[y][x-1] === 1) count++ // left
      if (world[y][x+1] === 1) count++ // right
    }
    if (x !== 0 && y !== 0 && x !== lastElementIndex && y !== world.length-1 && world.length > 1) {
      if (world[y-1][x] === 1) count++ // above
      if (world[y-1][x+1] === 1) count++ // upright
      if (world[y][x+1] === 1) count++ // right
      if (world[y+1][x+1] === 1) count++ //downright
      if (world[y+1][x] === 1) count++ // below
      if (world[y+1][x-1] === 1) count++ // downleft
      if (world[y][x-1] === 1) count++ // left
      if (world[y-1][x-1] === 1) count++ //upleft
    }

  return count;
}

let empArr = [];

for (let i = 0; i < world.length; i++) {
  empArr.push([]);
  for (let t = 0; t < world[i].length; t++){
    let result = countNeighbours(world, t, i);
    let element = world[i][t];

    if (element == 0 && result !==3 ) {
      empArr[i].push(0);
    }
    else if(element == 1) {
    //rule1, rule2, rule3
      if (result < 2 || result > 3) {
      empArr[i].push(0);
      }
      else if (result >= 2 && result <= 3) {
      empArr[i].push(1);
      }
    }
    //rule4
    else if (element == 0 && result === 3 ) {
      empArr[i].push(1);
    }
    }
    var newArray = empArr;
  }

world = newArray
console.log(world)
countCreateWorld++
}
