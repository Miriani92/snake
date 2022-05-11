import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood, foodGrowth } from "../helpers/randomFood";
import { useInterval } from "../helpers/interval";
import { moveSnake } from "../helpers/moveSnake";
import { getTheKey } from "../helpers/getSnakeDirection";

// import { getSnakeDirection } from "../helpers/getSnakeDirection";

const BoardSize = 20;
const Direction = {
  right: "right",
  left: "left",
  up: "up",
  down: "down",
};
const snkaeDefaultValue = [0];

const Board = () => {
  const [board, setBoard] = useState(createBoard(BoardSize));
  const [snakeCell, setSnakeCell] = useState(snkaeDefaultValue);
  const [foodCell, setFoodCell] = useState(randomFood(board.length));
  const [direction, setDirection] = useState(Direction.right);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const updatedDirection = getTheKey(e.key);
      const isValidateDirection = updatedDirection;
      if (isValidateDirection) setDirection(updatedDirection);
    });
  }, [direction]);

  useInterval(() => {
    const updatePosition = moveSnake(snakeCell, BoardSize, direction);
    setSnakeCell(updatePosition);
  }, 500);

  const gameOver = () => {
    let add = 0;
    const rightEdgeIndexes = new Array(20)
      .fill()
      .map((_, ind) => (add += BoardSize));
    add = -1;
    const leftEdgeIndexes = new Array(20)
      .fill()
      .map((_, ind) => (add += BoardSize));

    if (
      (rightEdgeIndexes.includes(snakeCell[0]) &&
        direction === Direction.right) ||
      (leftEdgeIndexes.includes(snakeCell[0]) &&
        direction === Direction.left) ||
      snakeCell[0] < 0 ||
      snakeCell > board.length
    ) {
      setSnakeCell(snkaeDefaultValue);
      setFoodCell(randomFood(board.length));
      setDirection(Direction.right);
    }
  };

  const handleFoodCosumption = (foodCell, snakeCell) => {
    const foodcell = foodGrowth(foodCell, snakeCell);
    // const updateSnakeCell = [...snakeCell];
    // updateSnakeCell.unshift(foodcell);

    if (foodcell) {
      setSnakeCell((prev) => {
        const oldSnake = [...prev];
        oldSnake.unshift(foodcell);
        return oldSnake;
      });
    }
  };
  handleFoodCosumption(foodCell, snakeCell);
  gameOver();
  console.log(snakeCell);

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
