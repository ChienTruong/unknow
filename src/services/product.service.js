import apis from '../constants/api';
import factoryService from './factory.service';

const api = apis.PRODUCT_API;

const productService = factoryService(api);

// Overide

export default productService;