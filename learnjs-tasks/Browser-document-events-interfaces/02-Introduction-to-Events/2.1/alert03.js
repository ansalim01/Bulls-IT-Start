'use strict'




field.addEventListener('click', (e) => {
    let box = field.getBoundingClientRect();

    let top = box.top + window.pageYOffset;
    let left = box.left + window.pageXOffset;


    // console.log(top, left);
    // console.log(right, bottom);

    ball.style.left = (e.clientX - field.clientLeft - left - ball.width / 2) + 'px';
    ball.style.top = (e.clientY - field.clientTop - top - ball.height / 2) + 'px';



    if (e.clientX > field.clientWidth) {
        ball.style.left = (field.clientWidth - ball.width) + 'px';
    }
    if (e.clientY > field.clientHeight) {
        ball.style.top = (field.clientHeight - ball.height) + 'px';
    }


    if (e.clientX < left + field.clientLeft + ball.height / 2) {
        ball.style.left = 0 + 'px';
    }
    if (e.clientY < top + field.clientTop + ball.width / 2) {
        ball.style.top = 0 + 'px';
    }

})