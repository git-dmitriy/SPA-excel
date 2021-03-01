import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "header";
  constructor($root, options) {
    super($root, {
      name: "Header",
      ...options,
    });
  }

  toHTML() {
    return `
      <input type="text" class="header__input" value="Новая таблица">
      <div>
        <div class="header__button">
          <span class="material-icons">
            delete</span>
        </div>
        <div class="header__button header__button_exit">
          <span class="material-icons">
            exit_to_app</span>
        </div>
      </div>`;
  }
}
