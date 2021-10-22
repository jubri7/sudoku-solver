import React from "react";
import { useState } from "react";
import solveSudoku from "../algorithms/backtrack";
import { cellGroupCalculator } from "../algorithms/cellGroupCalculator";

const preboard = [];
const positions = {};
for (let i = 0; i < 9; i++) {
  positions[i] = {};
  preboard.push([]);
  for (let j = 0; j < 9; j++) {
    preboard[i].push("");
  }
}

const useBoard = () => {
  const [board, setBoard] = useState(preboard);
  const [rows, setRow] = useState({ ...positions });
  const [columns, setColumn] = useState({ ...positions });
  const [cellGroups, setCellGroup] = useState({ ...positions });
  const changeCell = async (i, j, val) => {
    board[i][j] = val;
    let newBoard = [];
    let newRow = {};
    let newColumn = {};
    let newCellGroup = {};
    for (let k = 0; k < 9; k++) {
      newBoard.push([]);
      for (let l = 0; l < 9; l++) {
        if (!(k in newRow)) newRow[k] = {};
        if (!(l in newColumn)) newColumn[l] = {};
        let cell = cellGroupCalculator(k, l);
        if (!(cell in newCellGroup)) newCellGroup[cell] = {};
        if (board[k][l] !== "") {
          newRow[k][board[k][l]] = true;
          newColumn[l][board[k][l]] = true;
          newCellGroup[cell][board[k][l]] = true;
        }
        newBoard[k].push(board[k][l]);
      }
    }
    setBoard(newBoard);
    setRow(newRow);
    setColumn(newColumn);
    setCellGroup(newCellGroup);
  };
  const solve = (instant) => {
    const stack = solveSudoku(board);
    if (!stack.length) return;
    if (!instant) {
      for (let i = 0; i < stack.length; i++) {
        const curr = stack[i];
        setTimeout(() => {
          changeCell(curr[0], curr[1], curr[2]);
        }, 8 * i);
      }
    } else {
      for (let i = 0; i < stack.length; i++) {
        const curr = stack[i];
        changeCell(curr[0], curr[1], curr[2]);
      }
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
    setRow(positions);
    setColumn(positions);
    setCellGroup(positions);
  };

  return [board, changeCell, solve, reset, rows, columns, cellGroups];
};

export default useBoard;
