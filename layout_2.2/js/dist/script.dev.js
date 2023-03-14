'use strict';

function test() {
  var f;
  return regeneratorRuntime.async(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch());

        case 2:
          f = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

test();