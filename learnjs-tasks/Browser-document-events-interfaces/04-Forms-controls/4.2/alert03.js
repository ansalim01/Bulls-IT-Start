'use strict'

mouse.tabIndex = "1";

mouse.addEventListener('focus', (e) => {
    mouse.addEventListener('keyup', function (e) {
        if (e.code == 'ArrowLeft') {

            mouse.style.left = mouse.offsetLeft - mouse.offsetWidth + 'px';
        }
        if (e.code == 'ArrowUp') {
            mouse.style.top = mouse.offsetTop - mouse.offsetHeight + 'px';
        }
        if (e.code == 'ArrowRight') {

            mouse.style.left = mouse.offsetLeft + mouse.offsetWidth + 'px';
        }
        if (e.code == 'ArrowDown') {
            mouse.style.top = mouse.offsetTop + mouse.offsetHeight + 'px';
        }
    });
})