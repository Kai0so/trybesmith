import express from 'express';
import ProductsController from './controllers/productsController';
import UsersController from './controllers/usersController';
import OrdersController from './controllers/ordersController';
import validateLogin from './middlewares/loginValidation';
import LoginController from './controllers/loginController';

const app = express();
app.use(express.json());

const productsController = new ProductsController();
const usersController = new UsersController();
const ordersController = new OrdersController();
const loginController = new LoginController();

app.get('/products', productsController.getAll);
app.get('/orders', ordersController.getAll);

app.post('/products', productsController.create);
app.post('/users', usersController.create);
app.post('/login', validateLogin, loginController.login);

export default app;
