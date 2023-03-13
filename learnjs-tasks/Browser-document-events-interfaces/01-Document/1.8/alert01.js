'use strict'



function showNotification({ top, right, html, className }) {

    let div = document.createElement('div');
    div.classList.add("notification")
    div.classList.add(className)
    div.append(html)
    div.style.cssText = `
    top: ${top}px;
    right: ${right}px;
  `;
    document.body.append(div)
    setTimeout(() => div.remove(), 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);
