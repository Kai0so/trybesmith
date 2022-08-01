import express from 'express';
import ProductsController from './controllers/productsController';

const app = express();
app.use(express.json());

const productsController = new ProductsController();

app.post('/products', productsController.create);

export default app;
