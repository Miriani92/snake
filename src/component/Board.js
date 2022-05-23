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

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setDirection(getDirection(e.key));
    });
  }, [direction]);

  return (
    <div className="board">
      {board.map((row, index) => {
        return (
          <div key={index} className="row">
            {row.map((col, index) => {
              return <div key={index} className="cell"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
