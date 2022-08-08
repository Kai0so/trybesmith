import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import httpStatus from './helpers/httpStatus';

const Schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = Schema.validate({ name, amount });
  const data = [error];
  const [result] = JSON.parse(JSON.stringify(data));
  const { details } = result;
  const errorTyṕe = details[0].type;
  if (error) return res.status(httpStatus(errorTyṕe)).json({ message: error.message });
  next();
};

export default validateProduct;