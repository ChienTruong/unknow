import { combineReducers } from 'redux';
import productReducers from './product.reducer';
import postReducers from './post.reducer';

var myReducer = combineReducers({
    productReducers,
    postReducers
});

export default myReducer;

