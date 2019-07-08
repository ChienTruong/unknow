import * as Types from './../constants/actions';
const initalState = [];

const products = (state = initalState, action) => {
    switch(action.type) {
      case Types.ALL_ITEM:
        state = action.products;
        return [...state];
      default: return [...state];
    }
}

export default products;
