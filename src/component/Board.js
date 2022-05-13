import React, { useState, useEffect } from "react";
import { getClassName } from "../helpers/getClassName";
import { createBoard } from "../helpers/createBoard";
import { randomFood, foodGrowth } from "../helpers/randomFood";
import { useInterval } from "../helpers/interval";
import { moveSnake } from "../helpers/moveSnake";
import { getTheKey } from "../helpers/getSnakeDirection";
import { validateDirection } from "../helpers/validateDireaction";

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

  const restart = () => {
    setSnakeCell(snkaeDefaultValue);
    setFoodCell(randomFood(board.length));
    setDirection(Direction.right);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const updatedDirection = getTheKey(e.key);
      const isValidateDirection = updatedDirection;
      const isinvalidDireacion = validateDirection(direction, updatedDirection);
      if (isinvalidDireacion) return restart();
      if (isValidateDirection) setDirection(updatedDirection);
    });
  }, [direction]);

  useInterval(() => {
    const updatePosition = moveSnake(snakeCell, BoardSize, direction);
    setSnakeCell(updatePosition);
  }, 200);

  const gameOver = () => {
    let add = 0;
    const rightEdgeIndexes = new Array(20)
      .fill()
      .map((_, ind) => (add += BoardSize));
    add = 0;
    const leftEdgeIndexes = new Array(20)
      .fill()
      .map((_, ind) => (add += BoardSize));

    if (
      (rightEdgeIndexes.includes(snakeCell[0]) &&
        direction === Direction.right) ||
      (leftEdgeIndexes.includes(snakeCell[0]) &&
        direction === Direction.right) ||
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

    if (foodcell) {
      setSnakeCell((prev) => {
        const oldSnake = [...prev];
        oldSnake.unshift(foodcell);
        return oldSnake;
      });
      setFoodCell(randomFood(board.length));
    }
  };
  useEffect(() => {
    handleFoodCosumption(foodCell, snakeCell);
  }, [snakeCell[0], foodCell, direction]);
  gameOver();

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
