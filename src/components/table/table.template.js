const CODES = {
  A: 65,
  Z: 90,
};

function createCol(col) {
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

console.log(createCell, createRow, createCol);

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  console.log(colsCount);

  const rows = [];

  const cols = new Array(colsCount)
    .fill("")
    .map((el, idx) => {
      return String.fromCharCode(CODES.A + idx);
    })
    .map((el) => {
      return createCol(el);
    })
    .join("");

  console.log(cols);

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }

  return rows.join("");
}
