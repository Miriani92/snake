export const getSnakeDirection = (direction) => {
  if (direction === "right") return "right";
  if (direction === "left") return "left";
  if (direction === "up") return "up";
  if (direction === "down") return "down";
  return "";
};
