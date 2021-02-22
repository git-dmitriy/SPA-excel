import { capitalize } from "./utilities.js";
export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("No $root provided for DomListener");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      const name = this.name || "";
      if (!this[method]) {
        throw new Error(
          `Method ${method} is not implemented in ${name} Component`
        );
      }
      console.log(listener);
      this[method] = this[method].bind(this);
      // seems like addEventListener
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
// Input => onInput
function getMethodName(eventName) {
  return "on" + capitalize(eventName);
}
