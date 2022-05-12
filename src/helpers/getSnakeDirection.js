export const getTheKey = (key) => {
  let arrow;
  if (key === "ArrowUp") arrow = "up";
  if (key === "ArrowDown") arrow = "down";
  if (key === "ArrowLeft") arrow = "left";
  if (key === "ArrowRight") arrow = "right";

  return arrow;
};
