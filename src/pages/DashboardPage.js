import { Page } from "../core/Page";
import { createRecordsTable } from "./dashboard.functions";
import { $ } from "../core/Dom";

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create("div", "db").html(`
    <div class="header">
      <h1>Excel Dashboard</h1>
    </div>

    <div class="new">
      <div class="container">
        <a href="#excel/${now}" class="new__link">Новая таблица</a>
      </div>
    </div>
      ${createRecordsTable()}
    <div class="recent container">

    </div>
    `);
  }
}
