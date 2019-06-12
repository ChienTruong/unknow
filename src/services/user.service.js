import apis from '../constants/api';
import factoryService from './factory.service';

const api = apis.USER_API;

const productService = factoryService(api);

// Overide

export default productService;