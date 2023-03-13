'use strict'; ///---лайк-сердце---close

var mainComment = document.querySelector('.comment');
mainComment.addEventListener('click', function (e) {
  if (e.target.closest('.btn-like')) {
    e.target.classList.toggle('btn-like-active');
  } else if (e.target.closest('.btn-close')) {
    e.target.closest('.media').remove();
  }
}); ////

var formShape = document.querySelector('.shape__form');
var shapeButton = document.querySelector('.shape__button');
var commentName = formShape.querySelector('[name="shape__name"]');
var commentText = formShape.querySelector('[name="shape__text"]');
var commentDate = formShape.querySelector('[name="shape__date"]');
var shapeErrorName = document.getElementById('shape__error-name');
var shapeErrorText = document.getElementById('shape__error-text');
/*влидация*/

var numErrorName = 1;
commentName.addEventListener('input', function () {
  piginationCommentName();
});
var numErrorText = 1;
commentText.addEventListener('input', function () {
  piginationCommentText();
});

function piginationCommentName() {
  if (commentName.value.trim().length < 4) {
    commentName.classList.add('_form-error');
    shapeErrorName.innerHTML = 'Имя должно быть больше 3 символа';
    numErrorName === 0 ? numErrorName = 1 : '';
  } else {
    commentName.classList.remove('_form-error');
    shapeErrorName.innerHTML = '';
    numErrorName = 0;
  }
}

function piginationCommentText() {
  if (commentText.value.trim().length <= 0) {
    commentText.classList.add('_form-error');
    shapeErrorText.innerHTML = 'Нельзя оставлять пустой комментарий';
    numErrorText === 0 ? numErrorText = 1 : '';
  } else {
    commentText.classList.remove('_form-error');
    shapeErrorText.innerHTML = '';
    numErrorText = 0;
  }
} // submit


shapeButton.addEventListener('click', function (event) {
  event.preventDefault();
  piginationCommentName();
  piginationCommentText();
  if (numErrorName === 1 || numErrorText === 1) return;
  var comment = {
    name: commentName.value,
    text: commentText.value,
    date: commentDate.value
  };
  commentName.value = '';
  commentText.value = '';
  commentDate.value = '';
  addComment(comment);
});

function addComment(com) {
  ///добавление 0 в числа меньше 10
  var date = new Date();
  var time = "".concat(date.getHours() < 10 ? "0".concat(date.getHours()) : date.getHours(), ":").concat(date.getMinutes() < 10 ? "0".concat(date.getMinutes()) : date.getMinutes()); //время разница между 'сегодня'и 'ук.днём'

  var textDateDifference = null;
  var dateSelected = new Date(com.date);

  if (!com.date) {
    textDateDifference = 'Сегодня';
  }

  if (dateSelected.getFullYear() === date.getFullYear() && dateSelected.getMonth() === date.getMonth()) {
    if (dateSelected.getDate() === date.getDate()) {
      textDateDifference = 'Сегодня';
    } else if (dateSelected.getDate() + 1 === date.getDate()) {
      textDateDifference = 'Вчера';
    }
  } //добавление в html 


  var commentList = document.querySelector('.comment__list');
  commentList.insertAdjacentHTML('beforeend', "<li class=\"media\">\n    <div class=\"media__body\">\n        <div class=\"media__heading\">\n            <div class=\"media__name\">".concat(com.name, "</div>\n            <div class=\"media__metadate\">\n                <span class=\"media__date\">").concat(textDateDifference ? textDateDifference : com.date, ", ").concat(time, "</span>\n                \n            </div>\n        </div>\n        <div class=\"media__text\">\n        ").concat(com.text, "\n        </div>\n        <div class=\"media__footer\">\n            <div class=\"btn-like\"></div>\n            <div class=\"btn-close\"></div>\n        </div>\n    \n    </div>\n    </li>"));
}