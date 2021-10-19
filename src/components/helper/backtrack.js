const solveSudoku = function (startingBoard) {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push([]);
    for (let j = 0; j < 9; j++) {
      board[board.length - 1].push(startingBoard[i][j]);
    }
  }
  console.log(board);
  let v = {};
  let h = {};
  let cells = {};
  let change = {};
  const stack = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!(i in h)) h[i] = {};
      if (!(j in v)) v[j] = {};
      let cell = 1;
      if (i >= 6) cell += 6;
      else if (i >= 3) cell += 3;
      if (j >= 6) cell += 2;
      else if (j >= 3) cell += 1;
      if (!(cell in cells)) cells[cell] = {};
      if (board[i][j] === "") change[String(i) + "," + String(j)] = true;
      else {
        h[i][board[i][j]] = true;
        v[j][board[i][j]] = true;
        cells[cell][board[i][j]] = true;
      }
    }
  }

  function backtrack(i, j) {
    if (i < 0 || j < 0 || i >= board.length || j >= board.length) return false;

    if (i === 8 && j === 8 && !("8,8" in change)) return true;

    let cell = 1;
    if (i >= 6) cell += 6;
    else if (i >= 3) cell += 3;
    if (j >= 6) cell += 2;
    else if (j >= 3) cell += 1;

    if (i === 8 && j === 8 && "8,8" in change) {
      for (let k = 1; k < 10; k++) {
        if (String(k) in h[i]) continue;
        if (String(k) in v[j]) continue;
        if (String(k) in cells[cell]) continue;
        board[i][j] = String(k);
        stack.push([i, j, String(k)]);
        return true;
      }
    }

    let ans = false;
    for (let k = 1; k < 10; k++) {
      if (!(String(i) + "," + String(j) in change)) {
        if (j !== 8) ans = backtrack(i, j + 1);
        else ans = backtrack(i + 1, 0);
        if (!ans) return false;
        else return true;
      }
      if (String(k) in h[i]) continue;
      if (String(k) in v[j]) continue;
      if (String(k) in cells[cell]) continue;
      board[i][j] = String(k);
      stack.push([i, j, String(k)]);
      h[i][String(k)] = true;
      v[j][String(k)] = true;
      cells[cell][String(k)] = true;
      if (j !== 8) ans = backtrack(i, j + 1);
      else ans = backtrack(i + 1, 0);
      if (ans) return true;
      delete h[i][String(k)];
      delete v[j][String(k)];
      delete cells[cell][String(k)];
      if (String(i) + "," + String(j) in change) {
        board[i][j] = "";
        stack.push([i, j, ""]);
      }
    }
    return ans;
  }

  backtrack(0, 0);
  return stack;
};

export default solveSudoku;
