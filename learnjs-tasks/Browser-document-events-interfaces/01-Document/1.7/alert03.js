'use strict'

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    },

};

let container = document.getElementById('container');

test(data, container);

function test(obj, container) {
    for (var k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            let ul = document.createElement('ul')
            container.append(ul)
            let li = document.createElement('li')

            li.textContent = k;
            container.lastChild.append(li)
            test(obj[k], li)
        } else {

        }
    }
}



