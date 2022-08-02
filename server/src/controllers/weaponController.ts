import { IRequest, IResponse } from '../middlewares/interface';
import IWeapon, { IRequirements } from '../models/interfaces/IWeapon';
import weaponService from '../services/weaponService';
import errorHandler from '../utils/errorHandler';

const searchByParams = async (req: IRequest, res: IResponse) => {
  try {
    const requirements = req.body as IRequirements;
    const weapons = await weaponService.searchByParams(requirements);
    res.status(200).json(weapons);
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};

const getDetails = async (req: IRequest, res: IResponse) => {
  try {
    const { weaponName } = req.params;

    const weapon: IWeapon = await weaponService.getDetails(weaponName);
    res.status(200).json(weapon);
  } catch (err) {
    const errorMessage = errorHandler(err);
    res.status(500).json(errorMessage);
  }
};
export default { searchByParams, getDetails };
