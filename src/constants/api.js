/* eslint-disable */
const URL_API = process.env.REACT_APP_URL_API || '';

const apis = {
    URL_API: URL_API,
    USER_API: `${URL_API}/users`,
    PRODUCT_API: `${URL_API}/products`,
}

export default apis;
