import { ExcelComponent } from "../../core/ExcelComponent";
import { resizeHandler } from "./tableResize";
import { shouldResize } from "./table.functions";
import { createTable } from "./table.template";

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

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
