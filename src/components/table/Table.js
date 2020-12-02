import { ExcelComponent } from "../../core/ExcelComponent";

export class Table extends ExcelComponent {
  static className = "table";

  toHTML() {
    return `
      <div class="table__row">
        <div class="table__row-info"></div>
        <div class="table__row-data">
          <div class="table__column">A</div>
          <div class="table__column">B</div>
          <div class="table__column">C</div>
        </div>
      </div>
      <div class="table__row">
        <div class="table__row-info">1</div>
        <div class="table__row-data">
          <div class="table__cell table__cell_selected" contenteditable>A1</div>
          <div class="table__cell" contenteditable>B1</div>
          <div class="table__cell" contenteditable>C1</div>
        </div>
      </div>
      <div class="table__row">
        <div class="table__row-info">2</div>
        <div class="table__row-data">
          <div class="table__cell" contenteditable>A2</div>
          <div class="table__cell" contenteditable>B2</div>
          <div class="table__cell" contenteditable>C2</div>
        </div>
      </div>`;
  }
}
