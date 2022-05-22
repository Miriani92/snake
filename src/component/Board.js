import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood } from "../helpers/randomFood";
import { getDirection } from "../helpers/getSnakeDirection";
import { useInterval } from "../helpers/interval";
import { moveSnake } from "../helpers/moveSnake";

const BoardSize = 20;
const Direction = {
  right: "right",
  left: "left",
  up: "up",
  down: "down",
};
const snkaeDefaultValue = [0];

const Board = () => {
  const [direction, setDirection] = useState(Direction.right);
  const [board, setBoard] = useState(createBoard(BoardSize));
  const [snakeCell, setSnakeCell] = useState(snkaeDefaultValue);
  const [foodCell, setFoodCell] = useState(randomFood(BoardSize));

  useInterval(() => {
    const snakeMoveIndex = moveSnake(direction, BoardSize, snakeCell);
    setSnakeCell([snakeMoveIndex]);
  }, 1000);
  // const getFood = (foodCell, snakcell) => {
  //   if (foodCell === snakcell[0]) {
  //     setFoodCell(randomFood(BoardSize));
  //   }
  // };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setDirection(getDirection(e.key));
    });
    getFood(foodCell, snakeCell);
  }, [direction]);

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
