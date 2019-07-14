import { combineReducers } from 'redux';
import productReducers from './product.reducer';
import postReducers from './post.reducer';
import productAll from './product';

var myReducer = combineReducers({
    productReducers,
    postReducers,
    productAll
});

export default myReducer;
