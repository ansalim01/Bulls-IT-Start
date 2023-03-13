'use strict'


body.addEventListener('mouseover', (e) => {
    let hint = document.createElement("div")
    hint.classList.add('tooltip');
    hint.innerHTML = e.target.dataset.tooltip

    let top = e.target.getBoundingClientRect().top
    let left = e.target.getBoundingClientRect().left

    if (e.target.dataset.tooltip) {
        e.target.before(hint)
    }

    if (top > hint.offsetHeight + 6) {
        hint.style.top = (top - hint.offsetHeight - 6) + 'px';
        left > hint.offsetWidth / 2 ?
            hint.style.left = (left - ((left - hint.offsetWidth) / 2)) + 'px'
            : hint.style.left = 0 + 'px';
    } else {
        hint.style.top = (top + e.target.offsetHeight + 6) + 'px';
        left > hint.offsetWidth / 2 ?
            hint.style.left = (left - ((left - hint.offsetWidth) / 2)) + 'px'
            : hint.style.left = 0 + 'px';
    }

})

body.addEventListener('mouseout', (e) => {
    if (e.target.dataset.tooltip) {
        e.target.previousElementSibling.remove()

    }
})