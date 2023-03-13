'use strict'

contents.addEventListener('click', (e) => {
    let target = e.target.closest('a');

    if (target) {
        if (!confirm(`вы точно хотите перейти на страницу ${target.getAttribute('href')}`)) {
            e.preventDefault()
        }
    }
})