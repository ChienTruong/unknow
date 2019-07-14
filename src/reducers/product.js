import * as Types from './../constants/actions';
const initalState = [];

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
}

const products = (state = initalState, action) => {
  var index = -1;
  var { id } = action;
  switch (action.type) {
    case Types.ALL_ITEM:
      console.log(action);
      state = action.products;
      return [...state];
    case Types.DELETE_ITEM:
      console.log(action);
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    default: return [...state];
  }
}

export default products;
