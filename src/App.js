import { useEffect, useState } from "react";
import Cell from "./components/cell";
import useBoard from "./hooks/useBoard";

const row = {};
const column = {};
const group = {};

let id = 1;

const App = () => {
  const [board, changeCell, solve, reset] = useBoard();
  useEffect(() => {}, [board]);
  const solveButton = () => {
    solve();
  };
  const resetButton = () => {
    reset();
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
                  cellValue={board[indexI][indexJ]}
                />
              </div>
            );
          });
        })}
      </div>
      <button onClick={solveButton}>Solve</button>
      <br />
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default App;
