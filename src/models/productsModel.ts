import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}