const data = new Array(400).fill(new Array(100).fill("foo"));

const handleChange = (e) => {
  const row = Number(e.target.dataset.row);
  const column = Number(e.target.dataset.column);

  data[row][column] = e.target.value;

  console.log(`Updated data: ${data[row][column]}`);
};

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const table = document.createElement("table");

  table.addEventListener("change", handleChange);

  data.forEach((row, rowIndex) => {
    const rowElement = document.createElement("tr");

    row.forEach((cell, cellIndex) => {
      const cellElement = document.createElement("td");
      const inputElement = document.createElement("input");

      inputElement.type = "text";
      inputElement.value = cell;
      inputElement.dataset.row = rowIndex;
      inputElement.dataset.cell = cellIndex;

      cellElement.appendChild(inputElement);
      rowElement.appendChild(cellElement);
    });

    table.appendChild(rowElement);
  });

  body.appendChild(table);
});
