export function toHTML() {
  return `
    <li class="recent__record">
      <a class="recent__link" href="#">Таблица номер 1</a>
      <strong>29.11.2020</strong>
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
