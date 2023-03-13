'use strict'

let a = document.querySelectorAll('a[href]');
for (let i = 0; i < a.length; i++) {
    // console.log(a[i].href);
    // console.log(a[i].getAttribute('href'));
    if (a[i].getAttribute('href').includes(`://`, 0) && !(a[i].getAttribute('href').includes(`http://internal.com`))) {
        console.log(a[i]);
        a[i].style.color = 'orange';
    }
}
