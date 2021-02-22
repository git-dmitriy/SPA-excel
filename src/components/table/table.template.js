const CODES = {
  A: 65,
  Z: 90,
};

function toColumn(col) {
  return `
    <div class="table__column">${col}</div>
  `;
}

function createRow(index, content) {
  return `
    <div class="table__row">
      <div class="table__row-info">${index ? index: ''}</div>
      <div class="table__row-data">${content}</div>
    </div>
  `;
}

function toCell() {
  return `
    <div class="table__cell" contenteditable></div>
  `;
}

console.log(toCell, createRow, toColumn);

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;

  console.log(colsCount);

  const rows = [];

  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(toColumn)
    .join("");

  console.log(cols);

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill("")
      .map(toCell)
      .join("");

    rows.push(createRow(i + 1, cells));
  }

  return rows.join("");
}
