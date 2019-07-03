import Actions from '../constants/actions';
import apis from '../constants/api';
import axios from 'axios';
// Action Creator

function actionFactory(type) {
  return (payload) => ({ type, payload });
}

const _products = actionFactory(Actions.PRODUCTS);
const _productsAdd = actionFactory(Actions.PRODUCTS_ADD);
// Handle Action

const api = apis.PRODUCT_API;

const productActions = {
  findAll: () => {
    return dispatch => {
      return axios(api).then(response => {
        dispatch(_products(response.data));
      });
    };
  },
  create: (data) => {
    return dispatch => {
      return axios(api, data).then(response => {
        dispatch(_productsAdd(response.data));
      });
    };
  }
};

export default productActions;