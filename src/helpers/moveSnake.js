export const moveSnake = (snakeCells, boardSize, direciton) => {
  const snakeHead = snakeCells[0];
  let newhead;
  const updatetedSnakeCells = [];
  if (direciton === "right") {
    newhead = snakeHead + 1;
  }
  if (direciton === "left") {
    newhead = snakeHead - 1;
  }
  if (direciton === "up") {
    newhead = snakeHead - boardSize;
  }
  if (direciton === "down") {
    newhead = snakeHead + boardSize;
  }

  if (snakeCells.length > 1) {
    console.log("render");
    for (let i = 1; i < snakeCells.length; i++) {
      updatetedSnakeCells.push(snakeCells[i - 1]);
    }
    return [newhead, ...updatetedSnakeCells];
  }

  return [newhead];
};
