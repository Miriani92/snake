export const randomFood = (boardlength) => {
  const foodCellIndex = Math.floor(Math.random() * boardlength);
  if (foodCellIndex < 2) {
    return foodCellIndex + 10;
  }
  return foodCellIndex;
};

export const getApple = (appleindex, snakcell) => {};
