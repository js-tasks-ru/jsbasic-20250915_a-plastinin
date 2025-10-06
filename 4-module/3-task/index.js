function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    const trTable = table.rows[i];

    const teacherData = {
      name: trTable.firstElementChild.innerText,
      age: +trTable.cells[1].innerText,
      gender: trTable.cells[2].innerText,
      dataAvailable: trTable.lastElementChild.dataset.available,
    };

    if (teacherData.dataAvailable === undefined) {
      trTable.hidden = true;
    } else {
      trTable.classList.add(
        teacherData.dataAvailable === "true" ? "available" : "unavailable"
      );
    }

    trTable.classList.add(teacherData.gender === "m" ? "male" : "female");

    if (teacherData.age < 18) {
      trTable.style.textDecoration = "line-through";
    }
  }
}
