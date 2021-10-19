import React from "react";
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
  const changeCell = async (i, j, val) => {
    board[i][j] = val;
    let newBoard = [];
    for (let k = 0; k < 9; k++) {
      newBoard.push([]);
      for (let l = 0; l < 9; l++) {
        newBoard[k].push(board[k][l]);
      }
    }
    setBoard(newBoard);
  };
  const solve = () => {
    const stack = solveSudoku(board);
    for (let i = 0; i < stack.length; i++) {
      const curr = stack[i];
      setTimeout(() => {
        changeCell(curr[0], curr[1], curr[2]);
      }, 25 * i);
    }
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
