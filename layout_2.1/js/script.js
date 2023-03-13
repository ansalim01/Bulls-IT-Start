'use strict'


///лайк-сердце
let mainComment = document.querySelector('.comment')

mainComment.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-like')) return
    e.target.classList.toggle('btn-like-active')

})
////
const formShape = document.querySelector('.shape__form');
let shapeButton = document.querySelector('.shape__button');

const commentName = formShape.querySelector('[name="shape__name"]');
const commentText = formShape.querySelector('[name="shape__text"]');
const commentDate = formShape.querySelector('[name="shape__date"]');
const shapeErrorName = document.getElementById('shape__error-name');
const shapeErrorText = document.getElementById('shape__error-text');

/*влидация*/

let numErrorName = 1;
commentName.addEventListener('input', () => {
    piginationCommentName()

})
let numErrorText = 1;
commentText.addEventListener('input', () => {
    piginationCommentText()
})


function piginationCommentName() {
    if (commentName.value.trim().length < 4) {
        commentName.classList.add('_form-error')
        shapeErrorName.innerHTML = 'больше 4 надо'   /*---надо норм текст----------------------------*/
        numErrorName === 0 ? numErrorName = 1 : '';
    } else {
        commentName.classList.remove('_form-error')
        shapeErrorName.innerHTML = '';
        numErrorName = 0;
    }
}
function piginationCommentText() {
    commentText.classList.add('_form-error')
    shapeErrorText.innerHTML = 'пусто както'   /*---надо норм текст----------------------------*/
    numErrorText === 0 ? numErrorText = 1 : '';

    if (commentText.value.trim().length > 0) {
        commentText.classList.remove('_form-error')
        shapeErrorText.innerHTML = '';
        numErrorText = 0;
    }
}



// submit
shapeButton.addEventListener('click', (event) => {
    event.preventDefault();
    piginationCommentName()
    piginationCommentText()
    if (numErrorName !== 0 && numErrorText !== 0) return


    let comment = {
        name: commentName.value,
        text: commentText.value,
        date: commentDate.value,

        // Math.floor(Date.now() / 1000)
    }
    commentName.value = '';
    commentText.value = '';
    commentDate.value = '';

    addComment(comment);
});


function addComment(com) {
    let date = new Date();
    let today = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth()}`
        : date.getMonth()}-${date.getDate() < 10 ? `0${date.getDate()}`
            : date.getDate()}`;

    let time = `${date.getHours() < 10 ? `0${date.getHours()}`
        : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`
            : date.getMinutes()}`;
    console.log(time);

    let commentList = document.querySelector('.comment__list');
    commentList.insertAdjacentHTML('beforeend', `<li class="media">
    <div class="media__body">
        <div class="media__heading">
            <div class="media__name">${com.name}</div>
            <div class="media__metadate">
                <span class="media__date">${com.date ? com.date : today}, ${time}</span>
                
            </div>
        </div>
        <div class="media__text">
        ${com.text}
        </div>
        <div class="media__footer">
            <div class="btn-like"></div>
        </div>
    
    </div>
    </li>`)
}



