const CODES = {
  A: 65,
  Z: 90,
};

function toColumn(col, index) {
  return `
    <div class="table__column" data-type="resizable" data-col="${index}">
      ${col}
      <div 
        class="table__column-resize" 
        data-resize="col" 
        ></div>
    </div>
  `;
}

function createRow(index, content) {
  const resize = index
    ? '<div class="table__row-resize" data-resize="row"></div>'
    : "";
  const resizable = index ? 'data-type="resizable"' : "";
  return `
    <div class="table__row" ${resizable}>
      <div class="table__row-info">
        ${index ? index : ""}
        ${resize}
      </div>
      <div class="table__row-data">${content}</div>
    </div>
  `;
}

// function toCell(_, col) {
//   return `
//     <div
//       class="table__cell"
//       contenteditable
//       data-col="${col}"
//     ></div>
//   `;
// }

function toCell(row) {
  return function(_, col) {
    return `
    <div 
      class="table__cell" 
      contenteditable 
      data-col="${col}"
      data-type="cell"
      data-id="${row}:${col}"
    ></div>
    `;
  };
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;

  const rows = [];

  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(toColumn)
    .join("");

  rows.push(createRow(null, cols));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill("")
      // .map((_, col) => toCell(row, col))
      .map(toCell(row))
      .join("");

    rows.push(createRow(row + 1, cells));
  }

  return rows.join("");
}
