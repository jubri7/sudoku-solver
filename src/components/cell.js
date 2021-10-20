import { useEffect, useRef, useState } from "react";
import "./cell.css";

const style = {
  backgroundColor: "rgb(212, 229, 247)",
  padding: 0,
  height: "100%",
  width: "100%",
  textAlign: "center",
};
const onChangeStyle = {
  backgroundColor: "rgb(247, 188, 72)",
  padding: 0,
  height: "100%",
  width: "100%",
  textAlign: "center",
  // color: "rgb(78, 116, 161)",
  fontWeight: "strong",
  // fontSize: "medium",
};
const changeStyle = {
  backgroundColor: "rgb(37, 115, 201)",
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
  backgroundColor: "red",
};

let cellRow = null;
let cellColumn = null;
let cellGroup = null;

const Cell = ({ i, j, cellValue, changeCell }) => {
  const [cellStyle, setCellStyle] = useState(changeStyle);
  const [error, setError] = useState(false);
  useEffect(() => {
    setCellStyle(changeStyle);
    setTimeout(() => {
      setCellStyle(style);
    }, 10);
  }, [cellValue, error]);
  const handleChange = (e) => {
    if (parseInt(e.target.value) > 9 || parseInt(e.target.value) < 1) {
      return;
    }
    changeCell(i, j, e.target.value);
    setError(false);
    setTimeout(() => {
      if (e.target.value == "") setCellStyle(style);
      else setCellStyle(onChangeStyle);
    }, 40);
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
      // style={{col}}
    ></input>
  );
};

export default Cell;
