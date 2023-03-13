'use strict'

let viewEl = document.getElementById('view');
viewEl.tabIndex = 0;

let textareaEl = document.createElement('textarea');
textareaEl.classList.add("edit");

viewEl.addEventListener('focus', (e) => {
    textareaEl.value = viewEl.innerText
    viewEl.replaceWith(textareaEl)
})

textareaEl.addEventListener('blur', (e) => {
    viewEl.innerHTML = textareaEl.value

    textareaEl.replaceWith(viewEl)
})

textareaEl.onkeydown = function (event) {
    if (event.key == 'Enter') {
        this.blur();
    }
};