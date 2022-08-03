import ICategory from '../interfaces/entities/ICategory';
import { IRequest, IResponse } from '../interfaces/vendors';
import Category from '../models/Category';
import categoryService from '../services/categoryService';
import errorHandler from '../utils/errorHandler';

const getAll = async (req: IRequest, res: IResponse): Promise<IResponse> => {
  try {
    const categories: ICategory[] = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const create = async (req: IRequest, res: IResponse): Promise<IResponse> => {
  try {
    const { name } = req.body;
    const response: string = await categoryService.create(name);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const update = async (req: IRequest, res: IResponse): Promise<IResponse> => {
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

const remove = async (req: IRequest, res: IResponse): Promise<IResponse> => {
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
