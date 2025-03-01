import express from 'express';
import verification from '../middleWare/verification.js';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../Controllers/product.Controller.js';
const route = express.Router();
// route to createnew product
route.post('/',verification, createProduct)
// route to get created Products
route.get('/', getProducts)
// route to get any specific product
route.get('/:id', getProduct)
// route to delete any specific product
route.delete('/:id', verification, deleteProduct)
// route to update about the product
route.put('/:id', verification, updateProduct)
// export the route\
export default route;
