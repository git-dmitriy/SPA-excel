import { $ } from "../../core/Dom";
import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "keydown"],
      subscribe: ["currentText", "colState"],
      ...options,
    });
  }

  static className = "formula";
  toHTML() {
    return `
      <div class="formula__info">fx</div>
      <div
        id="formula"
        class="formula__input"
        contenteditable
        spellcheck="false"
      ></div>`;
  }

  init() {
    super.init();
    this.$formula = this.$root.find("#formula");
    this.$on("table:select", ($cell) => {
      this.$formula.text($cell.data.value);
    });
  }

  onInput(event) {
    this.$emit("formula:input", $(event.target).text());
  }

  storeChanged({ currentText }) {
    this.$formula.text(currentText);
  }

  onKeydown(event) {
    const keys = ["Enter", "Tab"];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit("formula:done");
    }
  }
}
