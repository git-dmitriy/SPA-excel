import { ExcelComponent } from "../../core/ExcelComponent";
import { $ } from "../../core/Dom";
import { changeTitle } from "../../redux/actions";
import { defaultTitle } from "../../constants";
import { debounce } from "../../core/utilities";

export class Header extends ExcelComponent {
  static className = "header";
  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["input"],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
      <input type="text" class="header__input" value="${title}">
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

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
