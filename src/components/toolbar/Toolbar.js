import { ExcelComponent } from "../../core/ExcelComponent";
import { createToolbar } from "./toolbar.template";
import { $ } from "../../core/Dom";

export class Toolbar extends ExcelComponent {
  static className = "toolbar";

  constructor($root, options) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
      ...options,
    });
  }

  toHTML() {
    return createToolbar();
  }

  onClick(event) {
    console.log("Toolbar element:\n", event.target);
    const $target = $(event.target);
    if ($target.data.type === "button") {
      console.log($target.data.value);
    }
  }
}
