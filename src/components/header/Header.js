import { ExcelComponent } from "../../core/ExcelComponent";
import { $ } from "../../core/Dom";
import { changeTitle } from "../../redux/actions";
import { defaultTitle } from "../../constants";
import { debounce } from "../../core/utilities";
import { ActiveRoute } from "../../core/routes/ActiveRoute";

export class Header extends ExcelComponent {
  static className = "header";
  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["input", "click"],
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
        <div class="header__button header__button_delete" data-button="remove">
          <span class="material-icons" data-button="remove">
            delete</span>
        </div>
        <div class="header__button header__button_exit" data-button="exit">
          <span class="material-icons" data-button="exit">
            exit_to_app</span>
        </div>
      </div>`;
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.button === "remove") {
      const decision = confirm("Вы действительно хотите удалить эту таблицу?");
      if (decision) {
        localStorage.removeItem(ActiveRoute.param.join(":"));
        console.log(ActiveRoute.param);
        ActiveRoute.navigate("");
      }
    } else if ($target.data.button === "exit") {
      ActiveRoute.navigate("");
    }
  }
}
