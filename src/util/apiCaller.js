import axios from 'axios';
import apis from '../constants/api';


export default function callApi(endPoint, method, body) {
  return axios({
    method: method,
    url: `${apis.PRODUCT_API}/products/${endPoint}`,
    data: body,
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
  }).catch(err => {
    console.log(err);

  })
}

