const getMultiply = () => {
  let table = ' ';
  let numToAdd = 1;
  for (let i = 0, j = 1;; i++) {
    if (i === 10 && j === 1) {
      j += 1;
      i = 0;
      numToAdd = j;
      table = `${table}\n1 ${table.trim()}\n`;
      console.log(table);
      console.log("YES!!!");
    } else if (i === 10 && j === 10) {
      console.log(table);
      return;
    } else if (i === 10) {
      console.log(table);
      j += 1;
      i = 0;
      numToAdd = j;
      table = `${table}\n${j}`;
    }

    table = `${table} ${numToAdd}`;

    numToAdd += j;
  }
}
