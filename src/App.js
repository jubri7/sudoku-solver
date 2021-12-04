import { useEffect } from "react";
import Cell from "./components/cell";
import useBoard from "./hooks/useBoard";
import "./App.css";
import "bootstrap/dist/css";

const App = () => {
  const [board, changeCell, solve, reset, rows, columns, cellGroups] =
    useBoard();
  useEffect(() => {}, [board]);
  const solveButton = (speed) => {
    solve(speed);
  };
  const resetButton = () => {
    reset();
  };
  return (
    <div>
      <h2>Enter your Sudoku puzzle</h2>
      <div className="board">
        {board.map((row, indexI) => {
          return row.map((column, indexJ) => {
            return (
              <div className="boardCells" key={`${indexI},${indexJ}`}>
                <Cell
                  i={indexI}
                  j={indexJ}
                  changeCell={changeCell}
                  cellValue={board[indexI][indexJ]}
                  rows={rows}
                  columns={columns}
                  cellGroups={cellGroups}
                />
              </div>
            );
          });
        })}
      </div>
      <div className="buttons">
        <button id="backtrack-button" onClick={() => solveButton(false)}>
          Backtrack Algo
        </button>
        <br />
        <button id="solution-button" onClick={() => solveButton(true)}>
          Solution
        </button>
        <br />
        <button id="reset-button" onClick={resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
