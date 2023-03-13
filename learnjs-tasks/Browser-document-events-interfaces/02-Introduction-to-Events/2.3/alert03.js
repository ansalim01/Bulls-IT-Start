'use strict'

console.log(grid);

grid.addEventListener('click', (e) => {
    if (e.target.tagName != 'TH') return;
    let th = e.target;
    th.cellIndex

    sortTabl(th.cellIndex, th.dataset.type)
})

function sortTabl(num, type) {
    let tbody = grid.querySelector('tbody')
    let rowsArray = Array.from(tbody.rows)

    if (type === 'string') {
        rowsArray.sort((a, b) => a.children[num].innerHTML > b.children[num].innerHTML ? 1 : -1);
    } else if (type === 'number') {
        rowsArray.sort((a, b) => a.children[num].innerHTML - b.children[num].innerHTML);
    }
    tbody.append(...rowsArray);
}


