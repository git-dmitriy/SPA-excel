import { $ } from "../../core/Dom";
import { Emitter } from "../../core/Emitter";
import { StoreSubscriber } from "../../core/StoreSubscriber";
import { preventDefault } from "../../core/utilities";
import { updateDate } from "../../redux/actions";

export class Excel {
  constructor(options) {
    this.components = options.components || [];
    this.emitter = new Emitter();
    this.store = options.store;
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create("div", "excel");

    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };

    this.components = this.components.map((Component) => {
      const $el = $.create("div", Component.className);
      const component = new Component($el, componentOptions);

      // * DEBUG

      // if (component.name) {
      //   window["c" + component.name] = component;
      // }
      // * --------------------

      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  init() {
    if (process.env.NODE_ENV === "production") {
      document.addEventListener("contextmenu", preventDefault);
    }
    this.subscriber.subscribeComponents(this.components);
    this.components.forEach((component) => component.init());
    this.store.dispatch(updateDate());
  }

  destroy() {
    this.subscriber.unsubscribeFromStore();
    this.components.forEach((component) => component.destroy());
    document.removeEventListener("contextmenu", preventDefault);
  }
}
