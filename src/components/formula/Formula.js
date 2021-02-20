import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input", "click"],
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
    console.log("formula on Input:", event.target.textContent.trim());
  }

  onClick(event) {
    console.log("formula on Click:", event.target.textContent.trim());
  }
}
