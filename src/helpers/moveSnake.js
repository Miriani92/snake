export const moveSnake = (snakeCell, boardSize, direciton) => {
  let newhead;
  if (direciton === "right") {
    newhead = snakeCell + 1;
  }
  if (direciton === "left") {
    newhead = snakeCell - 1;
  }
  if (direciton === "up") {
    newhead = snakeCell - boardSize;
  }
  if (direciton === "down") {
    newhead = snakeCell + boardSize;
  }

  return [newhead];
};
