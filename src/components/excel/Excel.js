import { $ } from "../../core/Dom";

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create("div", "excel");

    this.components.forEach((Component) => {
      // const $el = document.createElement("div");
      // $el.classList.add(Component.className);

      const $el = $.create("div", Component.className);

      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });

    return $root;
  }

  render() {
    // this.$el.insertAdjacentHTML("afterbegin", `<h1>Test</h1>`);
    this.$el.append(this.getRoot());
  }
}
