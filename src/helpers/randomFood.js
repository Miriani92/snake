export const randomFood = (boardlength) => {
  const foodCellIndex = Math.floor(Math.random() * boardlength * boardlength);

  if (foodCellIndex < 2) {
    return foodCellIndex + 10;
  }
  return foodCellIndex;
};
