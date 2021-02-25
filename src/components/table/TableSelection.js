export class TableSelection {
  static className = "table__cell_selected";

  constructor() {
    this.group = [];
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach((cell) => cell.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {}
}
