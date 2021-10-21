export const cellGroupCalculator = (i, j) => {
  let cell = 1;
  if (i >= 6) cell += 6;
  else if (i >= 3) cell += 3;
  if (j >= 6) cell += 2;
  else if (j >= 3) cell += 1;
  return cell;
};
