import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood } from "../helpers/randomFood";
import { useInterval } from "../helpers/interval";
// import { getSnakeDirection } from "../helpers/getSnakeDirection";

const BoardSize = 20;
const Direction = {
  right: "right",
  left: "left",
  up: "up",
  down: "down",
};

const Board = () => {
  const [board, setBoard] = useState(createBoard(BoardSize));
  const [snakeCell, setSnakeCell] = useState([0, 1, 2]);
  const [foodCell, setFoodCell] = useState(randomFood(board.length));
  const [direction, setDirection] = useState(direction.right);

  useEffect(() => {}, []);

  useInterval(() => {
    moveSnake(direction);
  }, 500);
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
