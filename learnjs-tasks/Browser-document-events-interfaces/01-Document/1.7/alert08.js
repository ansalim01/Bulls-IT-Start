'use strict'

let tbody = document.querySelector('tbody')
let tbodyTr = tbody.querySelectorAll('tr')

let arr = Array.from(tbodyTr).sort((a, b) => a.firstElementChild.innerHTML > b.firstElementChild.innerHTML ? 1 : -1);


tbody.append(...arr)


