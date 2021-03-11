import { Page } from "../core/Page";
import { $ } from "../core/Dom";

export class DashboardPage extends Page {
  getRoot() {
    return $.create("div", "db").html(`
    <div class="header">
      <h1>Excel Dashboard</h1>
    </div>

    <div class="new">
      <div class="container">
        <a href="#" class="new__link">Новая таблица</a>
      </div>
    </div>

    <div class="recent container">
      <div class="recent__list-header">
        <span>Название</span>
        <span>Дата открытия</span>
      </div>
      <ul class="recent__list">
        <li class="recent__record">
          <a class="recent__link" href="#">Таблица номер 1</a>
          <strong>29.11.2020</strong>
        </li>
        <li class="recent__record">
          <a class="recent__link" href="#">Таблица номер 2</a>
          <strong>29.11.2020</strong>
        </li>
        <li class="recent__record">
          <a class="recent__link" href="#">Таблица номер 3</a>
          <strong>29.11.2020</strong>
        </li>
      </ul>
    </div>
    `);
  }
}
