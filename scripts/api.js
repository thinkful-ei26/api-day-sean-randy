/* eslint-env jquery */
'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean-randy';

  function getItems(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);

  }

  function createItem(name, callback) {
    const newItem = JSON.stringify({name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  
  }

  function updateItem(id,updateData,callback){

    const stringifiedUpdateData = JSON.stringify(updateData);

    $.ajax({

      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: stringifiedUpdateData,
      success: callback

    });
 
  }

  return {getItems, createItem, updateItem};
}());
