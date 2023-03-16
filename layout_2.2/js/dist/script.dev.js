'use strict';

var formShape = document.querySelector('.shape__form');
var shapeButton = document.querySelector('.shape__button');
var shapeNameRepository = document.querySelector('.shape__name-repository');
var repositoryList = document.querySelector('.repository__list');
shapeButton.addEventListener('click', function (e) {
  e.preventDefault();
  gettingData();
}); //получени данных

function gettingData() {
  var inputValue, response, data;
  return regeneratorRuntime.async(function gettingData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          inputValue = shapeNameRepository.value;

          if (!(inputValue.trim().length <= 0)) {
            _context.next = 4;
            break;
          }

          repositoryList.innerHTML = '<div class="__error">Напишите что то</div>';
          return _context.abrupt("return");

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/search/repositories?q=".concat(inputValue)));

        case 7:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 15;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          addRepository(data);
          _context.next = 16;
          break;

        case 15:
          alert('есть проблемы');

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 18]]);
} //получени даты


function createsStringUpdated(updated) {
  var date = new Date(updated);
  var strDate = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1), "-").concat(date.getDate() > 10 ? date.getDate() : '0' + date.getDate());
  return strDate;
} //добавление в html 


function addRepository(data) {
  var lengthRepository = data.items.length;
  var itemsRepository = data.items;

  if (lengthRepository === 0) {
    repositoryList.innerHTML = '<div class="__error">Ничего не найдено</div>';
    return;
  }

  repositoryList.innerHTML = '';

  for (var i = 0; i < (lengthRepository > 10 ? 10 : lengthRepository); i++) {
    var updated = createsStringUpdated(itemsRepository[i].updated_at);
    repositoryList.insertAdjacentHTML('beforeend', "<li class=\"media\">\n        <div class=\"media__body\">\n            <div class=\"media__heading\">\n                <a class=\"media__name\" href=\"".concat(itemsRepository[i].owner.html_url, "\" target=\"_blank\">\u0410\u0432\u0442\u043E\u0440: ").concat(itemsRepository[i].owner.login, " </a>\n                <a class=\"media__metadate\" href=\"").concat(itemsRepository[i].owner.html_url, "\" target=\"_blank\">\n                    <span class=\"media__date\">\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439: ").concat(updated, "</span>\n                </a>\n            </div>\n            <a class=\"media__repository\" href=\"").concat(itemsRepository[i].html_url, "\" target=\"_blank\">\n            \u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 :\n                ").concat(itemsRepository[i].name, "\n            </a>\n        </div>\n    </li>"));
  }
}