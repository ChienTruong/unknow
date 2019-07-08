import { combineReducers } from 'redux';
import productReducers from './product.reducer';
import postReducers from './post.reducer';
import product from './product';

var myReducer = combineReducers({
    productReducers,
    postReducers,
    product
});

export default myReducer;

