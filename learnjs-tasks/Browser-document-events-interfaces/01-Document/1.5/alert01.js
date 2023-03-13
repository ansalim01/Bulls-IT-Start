'use strict'

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    let a = li.getElementsByTagName('li').length
    console.log(title);
    console.log(a);
}