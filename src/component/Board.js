import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood } from "../helpers/randomFood";
const BoardSize = 20;
const Board = () => {
  const [board, setBoard] = useState(createBoard(BoardSize));
  const [snakeCell, setSnakeCell] = useState([0, 1, 2]);
  const [foodCell, setFoodCell] = useState(randomFood(board.length));

  return (
    <div className="board">
      {board.map((_, index) => {
        const classname = getClassName(snakeCell, foodCell, index);
        return <div key={index} className={classname}></div>;
      })}
    </div>
  );
};

export default Board;
