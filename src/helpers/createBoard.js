export const createBoard = (BoardSize) => {
  const grid = [];
  let counter = 0;
  for (let i = 0; i < BoardSize; i++) {
    let row = [];
    for (let j = 0; j < BoardSize; j++) {
      row.push(counter);
      counter++;
    }
    grid.push(row);
  }
  return grid;
};
