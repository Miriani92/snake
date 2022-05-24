import { leftEdge, rightEdge } from "./getEdges";
import { useEffect, useRef } from "react";

export const useCollision = (board, snakeBody, direction) => {
  const prevValue = useRef(null);
  useEffect(() => {
    prevValue.current = direction;
  }, [direction]);
  if (prevValue.current === "right" && direction === "left") return true;
  if (prevValue.current === "up" && direction === "down") return true;
  if (prevValue.current === "left" && direction === "right") return true;
  if (prevValue.current === "down" && direction === "up") return true;
  let head = snakeBody[0];

  if (snakeBody.some((cell, index) => snakeBody[index + 1] === head))
    return true;
  if (
    (leftEdge.includes(head) && direction === "left") ||
    (rightEdge.includes(head) && direction === "right") ||
    head > 399 ||
    head < 0
  )
    return true;
};
