'use strict'


let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
}

container.addEventListener('click', (e) => {
    if (e.target.className !== 'remove-button') return;

    e.target.closest('.pane').remove()
})
