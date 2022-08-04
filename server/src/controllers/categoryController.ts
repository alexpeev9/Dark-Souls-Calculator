import ICategory from '../interfaces/entities/ICategory';
import { Request, Response } from 'express';
import Category from '../models/Category';
import categoryService from '../services/categoryService';
import errorHandler from '../utils/errorHandler';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const categories: ICategory[] = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name } = req.body;
    const response: string = await categoryService.create(name);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { customId } = req.params;
    const { name } = req.body;
    const response = await categoryService.update(customId, name);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const remove = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { customId } = req.params;
    const response = await categoryService.remove(customId);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

export default { getAll, create, update, remove };
