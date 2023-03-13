'use strict'

/**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */
function positionAt(anchor, position, elem) {
    // ... ваш код ...
    console.log(anchor);
    console.log(position);
    console.log(elem);

    let coords = anchor.getBoundingClientRect();


    switch (position) {
        case 'top-out':  // if (x === 'value1')
            elem.style.left = coords.left + "px";
            elem.style.top = (coords.top - elem.offsetHeight) + "px";
            break;
        case 'right-out':  // if (x === 'value2')
            elem.style.left = coords.right + "px";
            elem.style.top = coords.top + "px";
            break;
        case 'bottom-out':  // if (x === 'value2')
            elem.style.left = coords.left + "px";
            elem.style.top = coords.bottom + "px";
            break;

        case 'top-in':  // if (x === 'value2')
            elem.style.left = coords.left + "px";
            elem.style.top = coords.top + "px";
            break;
        case 'right-in':  // if (x === 'value2')
            elem.style.left = (coords.right - elem.offsetWidth) + "px";
            elem.style.top = coords.top + "px";
            break;
        case 'bottom-in':  // if (x === 'value2')
            elem.style.left = coords.left + "px";
            elem.style.top = (coords.bottom - elem.offsetHeight) + "px";
            break;

    }


}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "right-in", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");
showNote(blockquote, "bottom-out", "note bottom-in");