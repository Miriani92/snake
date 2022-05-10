export const getClassName = (snakeCell, foodCell, index) => {
  let className = "cell";
  if (snakeCell.includes(index)) className = "cell cell-snake";
  if (foodCell === index) className = "cell cell-food";
  return className;
};
