'use strict'



alert(genres.value);
alert(genres.options[genres.selectedIndex].text);

let optionNew = new Option('Классика', 'classic', true, true);

genres.append(optionNew)
