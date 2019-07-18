import Actions from '../constants/actions';
import apis from '../constants/api';
import axios from 'axios';
// Action Creator

function actionFactory(type) {
  return (payload) => ({ type, payload });
}

const _products = actionFactory(Actions.PRODUCTS);
const _productsAdd = actionFactory(Actions.PRODUCTS_CREATE);
const _productsUpdate = actionFactory(Actions.PRODUCTS_UPDATE);
const _productsDetail = actionFactory(Actions.PRODUCTS_DETAIL);
const _productsDelete = actionFactory(Actions.PRODUCTS_DELETE);
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
  },
  update: (id, data) => {
    const _data = convertToFormData(data);
    return dispatch => {
      axios.put(`${api}/${id}`, _data, { headers }).then(response => {
        dispatch(_productsUpdate(response.data));
      });
    };
  },
  findOne: (id) => {
    return dispatch => {
      axios.get(`${api}/${id}`).then(response => {
        dispatch(_productsDetail(response.data));
      });
    };
  },
  delete: (id) => {
    return dispatch => {
      axios.delete(`${api}/${id}`).then(response => {
        dispatch(_productsDelete(response.data));
      });
    };
  }
};

export default productActions;