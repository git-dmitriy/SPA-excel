import { ExcelComponent } from "../../core/ExcelComponent";
import { resizeHandler } from "./tableResize";
import { shouldResize } from "./table.functions";
import { createTable } from "./table.template";
import { TableSelection } from "./TableSelection";

export class Table extends ExcelComponent {
  static className = "table";

  constructor($root) {
    super($root, {
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable(31);
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="0:0"');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
