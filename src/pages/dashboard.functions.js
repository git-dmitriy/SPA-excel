import { storage } from "../core/utilities";

export function toHTML(key) {
  const model = storage(key);
  const id = key.split(":");
  return `
    <li class="recent__record">
      <a class="recent__link" href="#excel${id}">${model.title}</a>
      <strong>
        ${new Date(model.openedDate).toLocaleDateString()}
        ${new Date(model.openedDate).toLocaleTimeString()}
      </strong>
    </li>
  `;
}

export function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes("excel")) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p>Вы пока не создали ни одной таблицы.</p>`;
  }

  return `
    <div class="recent__list-header">
      <span>Название</span>
      <span>Дата открытия</span>
    </div>
    <ul class="recent__list">
      ${keys.map(toHTML).join("")}
    </ul>`;
}
