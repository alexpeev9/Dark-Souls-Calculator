import { IRequest, IResponse } from '../interfaces/vendors';
import weaponService from '../services/weaponService';
import errorHandler from '../utils/errorHandler';
import IWeapon, { IRequirements } from '../interfaces/entities/IWeapon';
import ICategoryVM from '../interfaces/viewmodels/ICategoryVM';

const searchByParams = async (
  req: IRequest,
  res: IResponse
): Promise<IResponse> => {
  try {
    const requirements = req.body as IRequirements;
    const weapons: ICategoryVM[] = await weaponService.searchByParams(
      requirements
    );
    return res.status(200).json(weapons);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

const getDetails = async (
  req: IRequest,
  res: IResponse
): Promise<IResponse> => {
  try {
    const { weaponName } = req.params;

    const weapon: IWeapon = await weaponService.getDetails(weaponName);
    return res.status(200).json(weapon);
  } catch (err) {
    const errorMessage = errorHandler(err);
    return res.status(500).json(errorMessage);
  }
};

export default { searchByParams, getDetails };
