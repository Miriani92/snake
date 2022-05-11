export const getSnakeDirection = (direction) => {
  if (direction === "right") return "right";
  if (direction === "left") return "left";
  if (direction === "up") return "up";
  if (direction === "down") return "down";
  return "";
};

export const getTheKey = (key) => {
  let arrow;
  if (key === "ArrowUp") arrow = "up";
  if (key === "ArrowDown") arrow = "down";
  if (key === "ArrowLeft") arrow = "left";
  if (key === "ArrowRight") arrow = "right";

  return arrow;
};
