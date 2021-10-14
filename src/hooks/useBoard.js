import { useState } from "react";
import solveSudoku from "../components/helper/backtrack";

let preboard = [];
let positions = {};
for (let i = 0; i < 9; i++) {
  preboard.push([]);
  for (let j = 0; j < 9; j++) {
    preboard[i].push("");
  }
}

const useBoard = () => {
  const [board, setBoard] = useState(preboard);
  const changeCell = (i, j, val) => {
    let newBoard = [...board];
    newBoard[i][j] = val;
    setBoard(newBoard);
    console.log(board);
  };
  const solve = () => {
    solveSudoku(board, changeCell);
  };
  const reset = () => {
    let newBoard = [];
    for (let i = 0; i < 9; i++) {
      newBoard.push([]);
      for (let j = 0; j < 9; j++) {
        newBoard[i].push("");
      }
    }
    setBoard(newBoard);
  };

  return [board, changeCell, solve, reset];
};

export default useBoard;
