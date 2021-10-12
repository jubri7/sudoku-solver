import { useState } from "react";

const board = [];
for (let i = 0; i < 9; i++) {
  board.push([]);
  for (let j = 0; j < 0; j++) {
    board[board.length - 1].append(null);
  }
}
const Board = () => {
  const [row, setRow] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  });
  const [column, setColumn] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  });
  const [group, setGroup] = useState({
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  });
  return <div>board</div>;
};
