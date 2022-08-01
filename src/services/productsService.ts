import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import Product from '../interfaces/product.interface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  }
}

export default ProductsService;