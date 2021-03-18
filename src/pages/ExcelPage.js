import { Page } from "../core/Page";
import { Excel } from "../components/Excel/Excel";
import { Formula } from "../components/formula/Formula";
import { Header } from "../components/Header/Header";
import { Table } from "../components/table/Table";
import { Toolbar } from "../components/toolbar/Toolbar";
import { createStore } from "../core/createStore";
import { debounce, storage } from "../core/utilities";
import { normalizeInitialState } from "../redux/initialState";
import { rootReducer } from "../redux/rootReducer";

function storageName(param) {
  return param.join(':');
}
export class ExcelPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString();

    const state = storage(storageName(params));
    const store = createStore(rootReducer, normalizeInitialState(state));

    const stateListener = debounce((state) => {
      storage(storageName(params), state);
    }, 300);

    store.subscribe(stateListener);

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    });
    return this.excel.getRoot();
  }

  afterRender() {
    this.excel.init();
  }

  destroy() {
    this.excel.destroy();
  }
}
