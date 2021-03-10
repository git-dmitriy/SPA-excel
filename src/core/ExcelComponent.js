import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];
    // this.storeSub = null;
    this.prepare();
  }
  // prepare component before initialization
  prepare() {}

  // Return component template
  toHTML() {
    return "";
  }
  // Notify listeners about an event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // notify changes if subscribed
  storeChanged() {}

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
