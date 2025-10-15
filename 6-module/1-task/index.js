/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #elem;

  get elem() {
    return this.#elem;
  }

  constructor(rows) {
    // соберем таблицу
    this.#elem = document.createElement("table");
    const theadTag = document.createElement("thead");
    const tbodyTag = document.createElement("tbody");

    let tableRowHeader = this.#createTableRow(rows[0], true);
    theadTag.append(tableRowHeader);
    this.#elem.append(theadTag);

    rows.forEach((element) => {
      let tableRow = this.#createTableRow(element);
      tbodyTag.append(tableRow);
    });

    this.#elem.append(tbodyTag);

    this.#elem.onclick = (event) => {
      if (event.target.tagName != "BUTTON") return;
      event.target.closest("tr").remove();
    };
  }

  #createTableRow(rowValue, isHeader = false) {
    const trTag = document.createElement("tr");
    const tagName = isHeader ? "th" : "td";

    for (let key in rowValue) {
      const tdTag = document.createElement(tagName);
      tdTag.append(isHeader ? key : rowValue[key]);
      trTag.append(tdTag);
    }

    // последняя колонка таблицы
    if (isHeader) {
      const tdTag = document.createElement(tagName);
      trTag.append(tdTag);
    } else {
      const tdTag = document.createElement(tagName);
      const buttonTag = document.createElement("button");
      buttonTag.append("X");
      tdTag.append(buttonTag);
      trTag.append(tdTag);
    }
    return trTag;
  }
}
