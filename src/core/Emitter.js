export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // on, listen
  // Notifies listeners if any
  // table.emit('table:select', {a: 1})
  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false;
    }
    this.listeners[eventName].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  // on, listen
  // Subscribe to the notification
  // Adding a new listener
  // formula.subscribe('table:select', () => {})
  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (listener) => listener !== fn
      );
    };
  }
}

/*
 * * Example
 */
// const emitter = new Emitter();
// const unsub = emitter.subscribe(
//  "dimasik", (data) => console.log("Sub:", data));
// emitter.emit("dimasik-", 42);
// setTimeout(() => {
//   emitter.emit("dimasik", "after 2 second");
// }, 2000);
// setTimeout(() => {
//   unsub();
// }, 3000);
// setTimeout(() => {
//   emitter.emit("dimasik", "after 4 second");
// }, 4000);
