'use strict';

var formShape = document.querySelector('.shape__form');
var shapeButton = document.querySelector('.shape__button');
var shapeNameRepository = document.querySelector('.shape__name-repository');
var repositoryList = document.querySelector('.repository__list');
document.addEventListener('keyup', function (e) {
  if (e.code != 'Enter') return;
  gettingData();
});
shapeButton.addEventListener('click', function _callee(e) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          gettingData();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});

function gettingData() {
  var inputValue, response, data;
  return regeneratorRuntime.async(function gettingData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          inputValue = shapeNameRepository.value;

          if (!(inputValue.trim().length <= 0)) {
            _context2.next = 4;
            break;
          }

          repositoryList.innerHTML = '<div class="__error">Напишите что то</div>';
          return _context2.abrupt("return");

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/search/repositories?q=".concat(inputValue)));

        case 7:
          response = _context2.sent;
          console.log(response);

          if (!response.ok) {
            _context2.next = 16;
            break;
          }

          _context2.next = 12;
          return regeneratorRuntime.awrap(response.json());

        case 12:
          data = _context2.sent;
          addRepository(data);
          _context2.next = 17;
          break;

        case 16:
          alert('есть проблемы');

        case 17:
          _context2.next = 22;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 19]]);
}

function addRepository(data) {
  var lengthRepository = data.items.length;
  var itemsRepository = data.items;

  if (lengthRepository === 0) {
    repositoryList.innerHTML = '<div class="__error">Не нашёл</div>';
    return;
  }

  repositoryList.innerHTML = '';

  for (var i = 0; i < (lengthRepository > 10 ? 10 : lengthRepository); i++) {
    var updated = createsStringUpdated(itemsRepository[i].updated_at);
    repositoryList.insertAdjacentHTML('beforeend', "<li class=\"media\">\n        <div class=\"media__body\">\n            <div class=\"media__heading\">\n           \n                <a class=\"media__name\" href=\"".concat(itemsRepository[i].owner.html_url, "\" target=\"_blank\">\u0410\u0432\u0442\u043E\u0440: ").concat(itemsRepository[i].owner.login, " </a>\n                <a class=\"media__metadate\" href=\"").concat(itemsRepository[i].owner.html_url, "\" target=\"_blank\">\n                    <span class=\"media__date\">\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439: ").concat(updated, "</span>\n                </a>\n            </div>\n            \n            <a class=\"media__repository\" href=\"").concat(itemsRepository[i].html_url, "\" target=\"_blank\">\n            \u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 :\n                ").concat(itemsRepository[i].name, "\n            </a>\n        </div>\n    </li>"));
  }
}

function createsStringUpdated(updated) {
  var date = new Date(updated);
  var strDate = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1), "-").concat(date.getDate() > 10 ? date.getDate() : '0' + date.getDate());
  return strDate;
}