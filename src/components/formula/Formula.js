import { $ } from "../../core/Dom";
import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "keydown"],
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
      this.$formula.text($cell.text());
    });
    // this.$on("table:input", ($cell) => {
    //   this.$formula.text($cell.text());
    // });

    this.$subscribe((state) => {
      console.log("Formula update:", state.currentText);
      this.$formula.text(state.currentText);
    });
  }

  onInput(event) {
    // console.log(this.$root);
    // const text = event.target.textContent.trim();
    this.$emit("formula:input", $(event.target).text());
  }

  onKeydown(event) {
    const keys = ["Enter", "Tab"];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit("formula:done");
    }
  }
}
