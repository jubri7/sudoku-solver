import { useEffect, useState } from "react";
import Cell from "./cell";
const board = [];

for (let i = 0; i < 81; i++) {
  board.push([]);
}
const row = {};
const column = {};
const group = {};

let id = 1;

const style = {};
const Board = () => {
  console.log(board);
  useEffect(() => {
    for (let i = 1; i < 10; i++) {
      row[i] = {};
      column[i] = {};
      group[i] = {};
    }
  }, []);
  const changeBoard = (num, val) => {};
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "0",
        width: "70%",
      }}
    >
      {board.map((block) => {
        return (
          <Cell
            key={(id += 1)}
            id={id}
            group={group}
            column={column}
            row={row}
            changeBoard={changeBoard}
          />
        );
      })}
    </div>
  );
};

export default Board;
