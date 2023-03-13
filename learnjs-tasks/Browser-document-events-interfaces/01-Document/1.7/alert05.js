'use strict'

createCalendar(cal, 2023, 1)
function createCalendar(elem, year, month) {
    let mon = month - 1;
    let d = new Date(year, mon);
    let table = `<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;


    let numberDays = 32 - new Date(year, mon, 32).getDate();
    let lastDays = new Date(year, mon, numberDays)

    let a = d.getDay();
    if (d.getDay() === 0) {
        a += 7
    }
    for (let i = 1; i < a; i++) {
        table += `<td> </td>`
    }
    for (let i = 1; i <= numberDays; i++) {
        let x = new Date(year, mon, d.getDate() + i).getDay();
        if (x === 2) {
            table += `<tr><td>${i}</td>`
        } else {
            table += `<td>${i}</td>`
        }
    }
    if (lastDays.getDay() !== 0) {
        for (let i = 0; i < 7 - lastDays.getDay(); i++) {
            table += `<td> </td>`
        }
    }
    elem.innerHTML = table
}




