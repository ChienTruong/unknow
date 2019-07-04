import { combineReducers } from 'redux';
import productReducers from './product.reducer';

var myReducer = combineReducers({
    productReducers,

});

export default myReducer;

