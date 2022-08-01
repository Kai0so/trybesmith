import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private bookService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const { name, amount }: { name: string; amount: string } = req.body;
    const product = { name, amount };
    const createdProduct = await this.bookService.create(product);
    res.status(201).json(createdProduct);
  };
}

export default ProductsController;