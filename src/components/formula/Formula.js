import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "click"],
      ...options,
    });
  }

  static className = "formula";
  toHTML() {
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log(this.$root);
    const text = event.target.textContent.trim();
    this.$emit("formula:input", text);
  }

  onClick(event) {
    console.log("formula on Click:", event.target.textContent.trim());
  }
}
