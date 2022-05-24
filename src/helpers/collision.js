export const collision = (board, snakeBody, direction) => {
  let head = snakeBody[0];

  if (snakeBody.some((cell, index) => snakeBody[index + 1] === head))
    return true;
};
