import Weapon from '../models/Weapon';
import IWeapon, { IRequirements } from '../models/interfaces/IWeapon';
import Category from '../models/Category';
import ICategory from '../models/interfaces/ICategory';

interface ICategoryEntity extends ICategory {
  weapons: any[];
}

interface ICategoryList {
  [key: string]: ICategoryEntity;
}

const searchByParams = async (
  requirements: IRequirements
): Promise<ICategoryEntity[]> => {
  const { strength, dexterity, faith, intelligence } = requirements;

  const checkIfNumber = (property: any): number => {
    switch (typeof property) {
      case 'undefined':
        throw new Error(`Fill all requirements!`);
      case 'number':
        if (property < 0) throw new Error('Cannot have negative requirements!');
        break;
      default:
        throw new Error(`${property} is not a number`);
    }
    return property;
  };

  const weapons = await Weapon.find({
    'requirements.strength': { $lte: checkIfNumber(strength) },
    'requirements.dexterity': { $lte: checkIfNumber(dexterity) },
    'requirements.faith': { $lte: checkIfNumber(faith) },
    'requirements.intelligence': { $lte: checkIfNumber(intelligence) },
  }).select(['name', 'requirements', 'category', 'url', 'customId', '-_id']);

  let categories: ICategoryList = {};

  for (const weapon of weapons as Array<IWeapon>) {
    const categoryId = weapon.category?.toString() || '';
    delete weapon.category;
    if (!Object.keys(categories).includes(categoryId)) {
      let currentCategory = (await Category.findById(categoryId).select([
        'name',
        'imageUrl',
        'customId',
        '-_id',
      ])) as ICategoryEntity;
      if (currentCategory !== null) {
        currentCategory.weapons = [];
        currentCategory.weapons.push(weapon);
        categories[categoryId] = currentCategory;
      }
    } else {
      categories[categoryId].weapons.push(weapon);
    }
  }

  return Object.values(categories).sort((a, b) => {
    return b?.weapons.length - a?.weapons.length;
  });
};

const getDetails = async (weaponName: string): Promise<IWeapon> => {
  const weapon = (await Weapon.findOne({ customId: weaponName })
    .select(['-_id', '-createdAt', '-updatedAt', '-__v'])
    .lean()) as IWeapon;
  if (!weapon) throw new Error('Weapon not found!');
  delete weapon.category;

  return weapon;
};

export default { searchByParams, getDetails };
