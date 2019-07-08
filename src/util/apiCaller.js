import axios from 'axios';
import apis from '../constants/api';


export default function callApi(endPoint, method, body) {
  // return axios.get(`${apis.PRODUCT_API}/${endPoint}`);
  console.log(apis.PRODUCT_API);

  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // headers.append('Access-Control-Allow-Origin', '*');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  return axios({
    method: method,
    url: `${apis.PRODUCT_API}/${endPoint}`,
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
