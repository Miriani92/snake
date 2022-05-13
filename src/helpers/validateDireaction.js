export const validateDirection = (direction, updatedDireacion) => {
  if (direction === "right" && updatedDireacion === "left") return true;
  if (direction === "left" && updatedDireacion === "right") return true;
  if (direction === "up" && updatedDireacion === "down") return true;
  if (direction === "down" && updatedDireacion === "up") return true;
};
