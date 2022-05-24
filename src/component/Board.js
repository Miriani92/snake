import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood } from "../helpers/randomFood";
import { getDirection } from "../helpers/getSnakeDirection";
import { useInterval } from "../helpers/interval";

const BoardSize = 20;
const Direction = {
  right: "right",
  left: "left",
  up: "up",
  down: "down",
};
const snkaeDefaultValue = 0;

const Board = () => {
  const [direction, setDirection] = useState(Direction.right);
  const [board, setBoard] = useState(createBoard(BoardSize));
  const [snakeBody, setSnakeBody] = useState([snkaeDefaultValue]);
  const [foodCell, setFoodCell] = useState(randomFood(BoardSize));

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setDirection(getDirection(e.key));
    });
  }, [direction]);

  const moveSnake = () => {
    let snake = [...snakeBody];
    let head = snake[0];
    console.log("render");

    if (direction === "up") return head - BoardSize;
    if (direction === "down") return head + BoardSize;
    if (direction === "right") return head + 1;
    if (direction === "left") return head - 1;

    return setSnakeBody([...snakeBody, head]);
  };

  useInterval(() => {
    moveSnake();
  }, 500);
  return (
    <div className="board">
      {board.map((row, index) => {
        return (
          <div key={index} className="row">
            {row.map((cell) => {
              const className = getClassName(snakeBody, foodCell, cell);
              return <div key={cell} className={className}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
