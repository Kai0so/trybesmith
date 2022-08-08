import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll() {
    const allProducts = await this.model.getAll();
    return allProducts;
  }
}

export default OrdersService;