import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input"],
    });
  }

  static className = "formula";
  toHTML() {
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>`;
  }

  onInput() {}
}
