import express from 'express';
import ProductsController from './controllers/productsController';
import UsersController from './controllers/usersController';
import OrdersController from './controllers/ordersController';

const app = express();
app.use(express.json());

const productsController = new ProductsController();
const usersController = new UsersController();
const ordersController = new OrdersController();

app.get('/products', productsController.getAll);
app.get('/orders', ordersController.getAll);

app.post('/products', productsController.create);
app.post('/users', usersController.create);

export default app;
