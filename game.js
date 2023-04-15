const gameContainer = document.getElementById("game-container");

// Maze representation
const maze = [
  "####################",
  "#S.................#",
  "#.#.############.#.#",
  "#.#.#.#..##........#",
  "#.#...##....##..#..#",
  "#...#.###.#.##.###.#",
  "#...##.......#...#.#",
  "##########.#.#.#.#.#",
  "#..........#...#...#",
  "#...########.#######",
  "#...........#.......",
  "########.#.#.#######",
  "#......#.#...#.....#",
  "#..#.#.#.#########.#",
  "#..#.#.#.......#...#",
  "#.##.#.#######.#.###",
  "#.#.##.........#...#",
  "#.#..#######.#.###.#",
  "#........E#...#...#.",
  "####################"

  

];

// Create maze elements
for (const row of maze) {
  for (const cell of row) {
    const div = document.createElement("div");
    div.classList.add("cell");

    if (cell === "#") {
      div.classList.add("wall");
    } else if (cell === "S") {
      div.classList.add("player");
    } else if (cell === "E") {
      div.classList.add("enemy");
    }

    gameContainer.appendChild(div);
  }
}

// Implement player movement and collision detection
const player = document.querySelector(".player");
let playerIndex = [...gameContainer.children].indexOf(player);

 // ...

document.addEventListener("keydown", (e) => {
  let newIndex;

  switch (e.key) {
    case "ArrowUp":
      newIndex = playerIndex - 20;
      break;
    case "ArrowDown":
      newIndex = playerIndex + 20;
      break;
    case "ArrowLeft":
      newIndex = playerIndex - 1;
      break;
    case "ArrowRight":
      newIndex = playerIndex + 1;
      break;
    default:
      return;
  }

  const newCell = gameContainer.children[newIndex];

  if (!newCell.classList.contains("wall")) {
    gameContainer.children[playerIndex].classList.remove("player");
    newCell.classList.add("player");
    playerIndex = newIndex;
  }

  // Winning condition: reaching an enemy cell
  if (newCell.classList.contains("enemy")) {
    alert("You won!");
    window.location.reload();
  }
});

