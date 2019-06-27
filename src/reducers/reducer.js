var redux = require('redux');
var categoryreducer = require('./category.reducer');

var reducer = redux.combineReducers({categoryreducer})
module.exports = reducer