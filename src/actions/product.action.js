// import Actions from '../constants/actions';
// import apis from '../constants/api';
// import axios from 'axios';
import callApi from '../util/apiCaller';
import * as Types from './../constants/actions';

// Action Creator

// function actionFactory(type) {
//   return (payload) => ({ type, payload });
// }

// const _products = actionFactory(Actions.PRODUCTS);
// const _productsAdd = actionFactory(Actions.PRODUCTS_ADD);
// // Handle Action

// const api = apis.PRODUCT_API;

// const productActions = {
//   findAll: () => {
//     return dispatch => {
//       // return axios(api).then(response => {
//       //   dispatch(_products(response.data));
//       // });
//     };
//   },
//   create: (data) => {
//     return dispatch => {
//       return axios(api, data).then(response => {
//         dispatch(_productsAdd(response.data));
//       });
//     };
//   }
// };

// export default productActions;

export const actFetchProducts = () => {
  return (dispatch) => {
    return callApi('list', 'GET', null).then(res => {
      console.log(res);

      // dispatch(actProductsToStore(res.data));
    });
  }
}

export const actProductsToStore = (products) => {
   return {
     type: Types.ALL_ITEM,
     products
   }
}
