export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === "cell";
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1).fill("").map((_, index) => start + index);
}

export function nextSelector(key, { col, row }) {
  const MIN_VALUE = 0;
  switch (key) {
  case "ArrowLeft":
    col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
    break;
  case "ArrowUp":
    row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
    break;
  case "ArrowRight":
  case "Tab":
    col++;
    break;
  case "ArrowDown":
  case "Enter":
    row++;
    break;
  }

  return `[data-id="${row}:${col}"]`;
}
