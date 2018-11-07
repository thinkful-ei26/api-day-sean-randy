/* global shoppingList, store, Item, api */
/* eslint-env jquery */
'use strict';

$(document).ready(function() {
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
});
 

const item = store.items[0];
console.log('current name: ' + item.name);
store.findAndUpdate(item.id, { name: 'foobar' });
console.log('new name: ' + item.name);


