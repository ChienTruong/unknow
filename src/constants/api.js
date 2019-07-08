/* eslint-disable */
const URL_API = process.env.REACT_APP_URL_API || '';
// const URL_API = 'https://protected-wave-31261.herokuapp.com';

const apis = {
    URL_API: URL_API,
    USER_API: `${URL_API}/users`,
    PRODUCT_API: `${URL_API}`,
}

export default apis;
