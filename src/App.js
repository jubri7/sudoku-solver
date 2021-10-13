import { useEffect, useState } from "react";
import Cell from "./components/cell";

let preBoard = [];
for (let i = 0; i < 9; i++) {
  preBoard.push([]);
  for (let j = 0; j < 9; j++) {
    preBoard[i].push(null);
  }
}

const row = {};
const column = {};
const group = {};

let id = 1;

const App = () => {
  const [board, setBoard] = useState(preBoard);
  useEffect(() => {
    console.log(board);
  }, [board]);
  const changeCell = (i, j, val) => {
    let newBoard = [...board];
    newBoard[i][j] = val;
    setBoard(newBoard);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: 500,
          margin: "auto",
        }}
      >
        {board.map((rows, indexI) => {
          return rows.map((columns, indexJ) => {
            return (
              <div
                style={{ height: 40, maxWidth: "80%", textAlign: "center" }}
                key={`${indexI},${indexJ}`}
              >
                <Cell
                  i={indexI}
                  j={indexJ}
                  changeCell={changeCell}
                  board={board}
                />
              </div>
            );
          });
        })}
      </div>
      <button>Solve</button>
    </div>
  );
};

export default App;
