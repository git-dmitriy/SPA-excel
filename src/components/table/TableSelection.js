export class TableSelection {
  constructor() {
    this.group = [];
  }

  // $el instanceof DOM === true
  select($el) {
    this.group.push($el);
    $el.addClass("table__cell_selected");
  }

  selectGroup() {}
}
