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

const headers = {
  'Content-Type': 'multipart/form-data',
};

function convertToFormData(data) {
  const keys = Object.keys(data);
  const formData = new FormData();
  keys.forEach(key => formData.set(key, data[key]));
  return formData;
}

const productActions = {
  findAll: () => {
    return dispatch => {
      axios.get(api).then(response => {
        dispatch(_products(response.data));
      });
    };
  },
  create: (data) => {
    const _data = convertToFormData(data);
      return dispatch => {
      axios.post(api, _data, { headers }).then(response => {
        dispatch(_productsAdd(response.data));
      });
    };
  }
};

export default productActions;