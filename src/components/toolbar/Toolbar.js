import { ExcelStateComponent } from "../../core/ExcelStateComponent";
import { createToolbar } from "./toolbar.template";
import { $ } from "../../core/Dom";

export class Toolbar extends ExcelStateComponent {
  static className = "toolbar";

  constructor($root, options) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
      ...options,
    });
  }

  prepare() {
    const initialState = {
      textAlign: "left",
      fontWeight: "noraml",
      textDecoration: "none",
      fontStyle: "normal",
    };
    this.initState(initialState);
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === "button") {
      const value = JSON.parse($target.data.value);
      const key = Object.keys(value)[0];
      this.setState({ [key]: value[key] });
      console.log(this.state);
    }
  }
}
