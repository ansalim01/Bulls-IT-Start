'use strict'

function getUserTimer() {
    let a = new Date();
    let H = a.getHours();
    if (H < 10) {
        H = '0' + H
    }
    let M = a.getMinutes();
    if (M < 10) {
        M = '0' + M
    }
    let S = a.getSeconds();
    if (S < 10) {
        S = '0' + S
    }
    let redH = document.querySelector('.red')
    let greenM = document.querySelector('.green')
    let blueS = document.querySelector('.blue')
    redH.innerHTML = H
    greenM.innerHTML = M
    blueS.innerHTML = S

}

let timer;

function start() {
    timer = setInterval(getUserTimer, 0);
    getUserTimer();
}

function stop() {
    clearInterval(timer);
    timer = null;
}