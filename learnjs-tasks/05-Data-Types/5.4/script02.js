'use strict'

function sum() {

  let num = [];

  while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    num.push(+value);
  }

  let rez = 0;
  for (let n of num) {
    rez += n;
  }
  return rez;
}

alert(sum());