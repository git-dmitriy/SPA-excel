export class TableSelection {
  static className = "table__cell_selected";

  constructor() {
    this.group = [];
    this.current = null;
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear();
    $el.focus().addClass(TableSelection.className);
    this.group.push($el);
    this.current = $el;
  }

  clear() {
    this.group.forEach((cell) => cell.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup($group = []) {
    this.clear();

    this.group = $group;
    this.group.forEach(($el) => $el.addClass(TableSelection.className));
  }
}
