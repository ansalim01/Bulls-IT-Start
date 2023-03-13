'use strict'

let table = document.getElementById('bagua-table');

/* ваш код */
let text = '';

let body = document.querySelector('body')

table.addEventListener('click', (e) => {
    let target = e.target.closest('.edit-cancel,.edit-ok,td');
    if (!table.contains(target)) return;
    let td = e.target.closest('td');

    let editArea = document.createElement('textarea');
    editArea.style.resize = 'none'
    editArea.classList = 'edit-area';

    if (e.target.closest('.edit-ok')) {
        td.classList.remove('edit-td')
        td.innerHTML = td.querySelector('textarea').value
        text = ''
        return
    } else if (e.target.closest('.edit-cancel')) {
        td.classList.remove('edit-td')
        td.innerHTML = text;
        text = ''
        return
    } else if (target.nodeName == 'TD') {
        if (text === '') {
            let tdEl = document.createElement('td');
            tdEl.classList.add(td.className);
            tdEl.classList.add('edit-td')
            text = td.innerHTML;
            editArea.value = td.innerHTML;
            editArea.style.width = td.offsetWidth + 'px';
            editArea.style.height = td.offsetHeight + 'px';

            tdEl.append(editArea)
            tdEl.insertAdjacentHTML('beforeend', `<div class="edit-control">
            <button class="edit-ok">OK</button>
            <button class="edit-cancel">CANCEL</button>
        </div>`)

            td.replaceWith(tdEl);
        }
    }

})



