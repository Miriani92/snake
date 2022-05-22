export const createBoard = (BoardSize) => {
  let board = [];
  for (let i = 0; i < BoardSize * BoardSize + 1; i++) {
    board.push(i);
  }
  return board;
};
