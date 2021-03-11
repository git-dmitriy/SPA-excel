import { Page } from "../core/Page";

import { Excel } from "../components/Excel/Excel";
import { Formula } from "../components/formula/Formula";
import { Header } from "../components/Header/Header";
import { Table } from "../components/table/Table";
import { Toolbar } from "../components/toolbar/Toolbar";
import { createStore } from "../core/createStore";
import { debounce, storage } from "../core/utilities";
import { initialState } from "../redux/initialState";
import { rootReducer } from "../redux/rootReducer";

export class ExcelPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState);

    const stateListener = debounce((state) => {
      console.log("App state:", state);
      storage("excel-state", state);
    }, 300);

    store.subscribe(stateListener);

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    });
    return this.excel.getRoot();
  }

  afterRender() {
    console.log("after render");
    this.excel.init();
  }

  destroy() {
    this.excel.destroy();
  }
}
