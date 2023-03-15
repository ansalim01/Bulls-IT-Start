'use strict'

const formShape = document.querySelector('.shape__form');
const shapeButton = document.querySelector('.shape__button');

const commentName = formShape.querySelector('[name="shape__name"]');
const commentText = formShape.querySelector('[name="shape__text"]');
const commentDate = formShape.querySelector('[name="shape__date"]');
const shapeErrorName = document.getElementById('shape__error-name');
const shapeErrorText = document.getElementById('shape__error-text');

/*валидация*/

let numErrorName = false;
commentName.addEventListener('input', () => {
    piginationCommentName()

})
let numErrorText = false;
commentText.addEventListener('input', () => {
    piginationCommentText()
})


function piginationCommentName() {
    if (commentName.value.trim().length < 4) {
        commentName.classList.add('_form-error')
        shapeErrorName.innerHTML = 'Имя должно быть больше 3 символа'
        numErrorName === true ? numErrorName = false : '';
    } else {
        commentName.classList.remove('_form-error')
        shapeErrorName.innerHTML = '';
        numErrorName = true;
    }
}
function piginationCommentText() {
    if (commentText.value.trim().length <= 0) {
        commentText.classList.add('_form-error')
        shapeErrorText.innerHTML = 'Нельзя оставлять пустой комментарий'
        numErrorText === true ? numErrorText = false : '';
    } else {
        commentText.classList.remove('_form-error');
        shapeErrorText.innerHTML = '';
        numErrorText = true;
    }
}



// submit
shapeButton.addEventListener('click', (event) => {
    event.preventDefault();
    piginationCommentName()
    piginationCommentText()
    if (numErrorName === false || numErrorText === false) return

    let comment = {
        name: commentName.value,
        text: commentText.value,
        date: commentDate.value,
    }
    commentName.value = '';
    commentText.value = '';
    commentDate.value = '';

    addComment(comment);
});



function addComment(com) {
    ///добавление 0 в числа меньше 10
    let date = new Date();
    let time = `${date.getHours() < 10 ? `0${date.getHours()}`
        : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`
            : date.getMinutes()}`;

    //время разница между 'сегодня'и 'ук.днём'
    let textDateDifference = null;
    let dateSelected = new Date(com.date);
    if (!com.date) {
        textDateDifference = 'Сегодня';
    }

    if ((dateSelected.getTime() / 1000 / 3600 / 24) === Math.floor(date.getTime() / 1000 / 3600 / 24)) {
        textDateDifference = 'Сегодня';
    } else if ((dateSelected.getTime() / 1000 / 3600 / 24) + 1 === Math.floor(date.getTime() / 1000 / 3600 / 24)) {
        textDateDifference = 'Вчера';
    }

    //добавление в html 
    let commentList = document.querySelector('.comment__list');
    commentList.insertAdjacentHTML('beforeend', `<li class="media">
    <div class="media__body">
        <div class="media__heading">
            <div class="media__name">${com.name}</div>
            <div class="media__metadate">
                <span class="media__date">${textDateDifference ? textDateDifference : com.date}, ${time}</span>
                
            </div>
        </div>
        <div class="media__text">
        ${com.text}
        </div>
        <div class="media__footer">
            <div class="btn-like"></div>
            <div class="btn-close"></div>
        </div>
    
    </div>
    </li>`)
}

///---лайк-сердце---close
const mainComment = document.querySelector('.comment')

mainComment.addEventListener('click', (e) => {
    if (e.target.closest('.btn-like')) {
        e.target.classList.toggle('btn-like-active')
    } else if (e.target.closest('.btn-close')) {
        e.target.closest('.media').remove();
    }
})


////