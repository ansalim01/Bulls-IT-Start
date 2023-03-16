'use strict'

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let a = list;

  while (a) {
    console.log(a.value);
    a = a.next;
  }

}

printList(list);





function printList1(list) {

  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }

}

printList1(list);