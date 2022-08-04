import ICategory from '../interfaces/entities/ICategory';
import categoryService from '../services/categoryService';
import errorHandler from '../utils/errorHandler';

const getAll = async (req: any, res: any) => {
  try {
    const categories: ICategory[] = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const create = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const response: string = await categoryService.create(name);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const update = async (req: any, res: any) => {
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

const remove = async (req: any, res: any) => {
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
