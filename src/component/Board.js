import React, { useEffect, useState } from "react";
import useFood from "./useFood";

const width = 20;
const Board = () => {
  const [squares, setSquares] = useState([]);
  const [snakePostion, setSnakePostion] = useState(0);
  const [foodPosition, setFoodPostion] = useState();
  const foodIndex = useFood();
  const createBoard = () => {
    let squeare = [];
    for (let i = 0; i < 400; i++) {
      squeare.push(i);
    }
    return setSquares([...squeare]);
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    setFoodPostion(foodIndex);
  }, [useFood]);

  return (
    <div className="board">
      {squares.map((_, index) => {
        return (
          <div
            key={index}
            className={`square ${
              index === snakePostion
                ? "snake"
                : "" || index === foodPosition
                ? "food"
                : ""
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default Board;
