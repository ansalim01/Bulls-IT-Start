'use strict'


function test() {
    let li = document.createElement('li');
    let a = prompt('text', '')
    if (a == null) {
        return
    } else {
        li.textContent = `${a}`;
        ul.append(li)
        test();
    }
}
test()