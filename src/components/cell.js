import { useEffect, useState } from "react";
import "./cell.css";

const style = {
  backGroundColor: "white",
  padding: 0,
  height: "100%",
  width: "100%",
  textAlign: "center",
};
const changeStyle = {
  backGroundColor: "green",
  padding: 0,
  height: "100%",
  width: "100%",
  textAlign: "center",
};

const errorStyle = {
  padding: 0,
  height: "100%",
  width: "100%",
  textAlign: "center",
  backGroundColor: "red",
};

let cellRow = null;
let cellColumn = null;
let cellGroup = null;

const Cell = ({ i, j, board, changeCell }) => {
  const [cellValue, setCellValue] = useState(board[i][j]);
  const [cellStyle, setCellStyle] = useState(style);
  const [error, setError] = useState(false);
  useEffect(
    () => {
      setCellValue(board[i][j]);
    },
    [cellValue, error, board[i][j]],
    cellStyle
  );
  const handleChange = (e) => {
    if (parseInt(e.target.value) > 9 || parseInt(e.target.value) < 1) {
      return;
    }
    setCellStyle(changeStyle);
    setCellValue(e.target.value);
    changeCell(i, j, e.target.value);
    setError(false);
  };

  return (
    <input
      className="cell"
      value={cellValue || ""}
      onChange={handleChange}
      type="number"
      min={1}
      max={9}
      style={cellStyle}
    ></input>
  );
};

export default Cell;
