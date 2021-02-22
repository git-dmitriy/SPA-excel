const CODES = {
  A: 65,
  Z: 90,
};

function toColumn(col) {
  return `
    <div class="table__column">${col}</div>
  `;
}

function createRow(content) {
  return `
    <div class="table__row">
    <div class="table__row-info"></div>
    <div class="table__row-data">${content}</div>
    </div>
  `;
}

function createCell() {
  return `
    <div class="table__cell" contenteditable>B1</div>
  `;
}

console.log(createCell, createRow, toColumn);

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx);
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

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }

  return rows.join("");
}
