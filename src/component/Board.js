import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood } from "../helpers/randomFood";
import { getDirection } from "../helpers/getSnakeDirection";
import { useInterval } from "../helpers/interval";
import { useCollision } from "../helpers/collision";

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
  const isCollision = useCollision(board, snakeBody, direction);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setDirection(getDirection(e.key));
    });
  }, [direction]);

  const moveSnake = () => {
    let snake = [...snakeBody];
    let head = snake[0];

    if (direction === "up") head -= BoardSize;
    if (direction === "down") head += BoardSize;
    if (direction === "right") head += 1;
    if (direction === "left") head -= 1;
    snake.unshift(head);
    if (head !== foodCell) {
      snake.pop();
    } else {
      let randomFoodind = randomFood(BoardSize);
      console.log(snake.includes(randomFoodind));
      while (snake.includes(randomFoodind)) {
        randomFoodind = randomFood(BoardSize);
      }
      setFoodCell(randomFood(BoardSize));
    }

    if (isCollision) return gameover();
    setSnakeBody([...snake]);
  };

  function gameover() {
    setFoodCell(randomFood(BoardSize));
    setSnakeBody([snkaeDefaultValue]);
    setDirection(Direction.right);
  }

  useInterval(() => {
    moveSnake();
  }, 100);
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
