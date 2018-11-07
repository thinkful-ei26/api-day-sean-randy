/* eslint-env jquery */
'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean-randy';

  function getItems(callback) {
    callback('api module works');
  }

  return {getItems};
}());
