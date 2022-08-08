import express from 'express';
import ProductsController from './controllers/productsController';
import UsersController from './controllers/usersController';

const app = express();
app.use(express.json());

const productsController = new ProductsController();
const usersController = new UsersController();

app.get('/products', productsController.getAll);

app.post('/products', productsController.create);
app.post('/users', usersController.create);

export default app;
