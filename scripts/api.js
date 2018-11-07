/* eslint-env jquery */
'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean-randy';

  function getItems(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);

  }

  function createItem(name, callbackSuccess, callbackError) {
    const newItem = JSON.stringify({name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callbackSuccess,
      error: callbackError
    });
  
  }

  function updateItem(id,updateData,callbackSuccess, callbackError){
    const stringifiedUpdateData = JSON.stringify(updateData);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: stringifiedUpdateData,
      success: callbackSuccess,
      error: callbackError
    });
  }

  function deleteItem(id, callbackSuccess, callbackError) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callbackSuccess,
      error: callbackError
    });
  }

  return {getItems, createItem, updateItem, deleteItem};
}());
