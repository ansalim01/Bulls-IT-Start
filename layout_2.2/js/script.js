'use strict'



const formShape = document.querySelector('.shape__form');
const shapeButton = document.querySelector('.shape__button');
const shapeNameRepository = document.querySelector('.shape__name-repository');
const repositoryList = document.querySelector('.repository__list');

document.addEventListener('keyup', (e) => {
    if (e.code != 'Enter') return
    gettingData()
})
shapeButton.addEventListener('click', async (e) => {
    e.preventDefault();
    gettingData();
})
async function gettingData() {
    const inputValue = shapeNameRepository.value

    if (inputValue.trim().length <= 0) {
        repositoryList.innerHTML = '<div class="__error">Напишите что то</div>';
        return
    }
    try {
        let response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}`);
        console.log(response);
        if (response.ok) {
            const data = await response.json()

            addRepository(data)
        } else {
            alert('есть проблемы');
        }
    } catch (err) {
        console.log(err);
    }
}


function addRepository(data) {
    const lengthRepository = data.items.length;
    const itemsRepository = data.items;

    if (lengthRepository === 0) {
        repositoryList.innerHTML = '<div class="__error">Не нашёл</div>';
        return
    }

    repositoryList.innerHTML = '';

    for (let i = 0; i < (lengthRepository > 10 ? 10 : lengthRepository); i++) {
        const updated = createsStringUpdated(itemsRepository[i].updated_at)
        repositoryList.insertAdjacentHTML('beforeend', `<li class="media">
        <div class="media__body">
            <div class="media__heading">
           
                <a class="media__name" href="${itemsRepository[i].owner.html_url}" target="_blank">Автор: ${itemsRepository[i].owner.login} </a>
                <a class="media__metadate" href="${itemsRepository[i].owner.html_url}" target="_blank">
                    <span class="media__date">Обновленный: ${updated}</span>
                </a>
            </div>
            
            <a class="media__repository" href="${itemsRepository[i].html_url}" target="_blank">
            Репозиторий :
                ${itemsRepository[i].name}
            </a>
        </div>
    </li>`)
    }
}

function createsStringUpdated(updated) {
    const date = new Date(updated)
    const strDate = `${date.getFullYear()}-${(date.getMonth() + 1) > 10 ? (date.getMonth() + 1)
        : '0' + (date.getMonth() + 1)}-${date.getDate() > 10 ? date.getDate()
            : '0' + date.getDate()}`
    return strDate;
}
