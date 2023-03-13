'use strict'

let liAll = document.getElementsByTagName('li');


for (const k in liAll) {
    if (typeof liAll[k] === 'object' && liAll[k] !== null) {
        let leng = liAll[k].querySelectorAll('li').length;
        if (!leng) continue
        console.log(liAll[k].firstChild.data += `[${leng}]`);
    }
}

