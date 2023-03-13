'use strict'


// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let i = 1;
for (let li of document.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}




let width = 130;
let count = 3;

let ul = document.querySelector('ul');

let li = document.querySelectorAll('li');

let position = 0;

document.querySelector('.left').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    ul.style.transform = `translate(${position}px, 0px)`
};

document.querySelector('.right').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (li.length - count));
    ul.style.transform = `translate(${position}px, 0px)`
};