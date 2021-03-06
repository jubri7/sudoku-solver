import { useEffect } from "react";
import Cell from "./components/cell";
import useBoard from "./hooks/useBoard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

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
    <div className="board">
      <h2 className="container ">Enter your Sudoku puzzle</h2>
      <div className="container-md">
        {board.map((row, indexI) => {
          return (
            <div className="row justify-content-center">
              {row.map((column, indexJ) => {
                return (
                  <div
                    className="col g-0 boardCells"
                    key={`${indexI},${indexJ}`}
                  >
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
              })}
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="row justify-content-center mt-1">
          <button
            id="backtrack-button"
            className="bg-primary col-3 mx-1"
            onClick={() => solveButton(false)}
          >
            Backtrack Algo
          </button>
          <button
            id="solution-button"
            className="bg-success col-3 mx-1"
            onClick={() => solveButton(true)}
          >
            Instant Solution
          </button>
        </div>
        <br />
        <div className="row justify-content-center">
          <button
            id="reset-button"
            className="bg-danger row col-2"
            onClick={resetButton}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
