'use strict'

thumbs.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target.closest('a');

    if (!target) return;

    largeImg.src = target.href;
    largeImg.alt = target.title;
})