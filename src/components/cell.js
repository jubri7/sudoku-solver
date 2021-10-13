import { useEffect, useState } from "react";

const errorStyle = {
  error: {
    backGroundColor: "red",
    color: "red",
  },
};

let cellRow = null;
let cellColumn = null;
let cellGroup = null;

const Cell = ({ i, j, board, changeCell }) => {
  const [cellValue, setCellValue] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {}, [cellValue]);
  const handleChange = (e) => {
    changeCell(i, j, e.target.value);
    setCellValue(e.target.value);
  };

  return (
    <input
      className="cell"
      value={cellValue || ""}
      onChange={handleChange}
      type="number"
      min={1}
      max={9}
      style={{
        padding: 0,
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    ></input>
  );
};

export default Cell;
