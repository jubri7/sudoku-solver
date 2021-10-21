import { useEffect, useState } from "react";
import { cellGroupCalculator } from "../algorithms/cellGroupCalculator";
import "./cell.css";

const Cell = ({ i, j, cellValue, changeCell, rows, columns, cellGroups }) => {
  const [cellStyle, setCellStyle] = useState("regular");

  useEffect(() => {
    setCellStyle("animation");
    setTimeout(() => {
      setCellStyle("regular");
    }, 10);
  }, [cellValue]);
  const handleChange = (e) => {
    if (parseInt(e.target.value) > 9 || parseInt(e.target.value) < 1) {
      return;
    }
    changeCell(i, j, e.target.value);
    setTimeout(() => {
      if (
        parseInt(e.target.value) in rows[i] ||
        parseInt(e.target.value) in columns[j] ||
        parseInt(e.target.value) in cellGroups[cellGroupCalculator(i, j)]
      ) {
        setCellStyle("error");
      } else if (e.target.value === "") setCellStyle("regular");
      else setCellStyle("onChange");
    }, 40);
  };

  return (
    <input
      className={cellStyle}
      value={cellValue || ""}
      onChange={handleChange}
      type="number"
      min={1}
      max={9}
    ></input>
  );
};

export default Cell;
