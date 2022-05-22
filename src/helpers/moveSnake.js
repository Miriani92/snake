export const moveSnake = (direction, boardSize, snakeCell) => {
  let head = snakeCell[0];
  console.log(head);
  if (direction === "up") return head - boardSize;
  if (direction === "down") return head + boardSize;
  if (direction === "right") return head + 1;
  if (direction === "left") return head - 1;
  return head;
};
