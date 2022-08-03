import Weapon from '../models/Weapon';
import IWeapon, { IRequirements } from '../interfaces/entities/IWeapon';
import Category from '../models/Category';

import ICategoryVM from '../interfaces/viewmodels/ICategoryVM';
import ICategoriesVM from '../interfaces/viewmodels/ICategoriesVM';

const searchByParams = async (
  requirements: IRequirements
): Promise<ICategoryVM[]> => {
  const { strength, dexterity, faith, intelligence } = requirements;

  const checkIfNumber = (property: number): number => {
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

  const weapons = (await Weapon.find({
    'requirements.strength': { $lte: checkIfNumber(strength) },
    'requirements.dexterity': { $lte: checkIfNumber(dexterity) },
    'requirements.faith': { $lte: checkIfNumber(faith) },
    'requirements.intelligence': { $lte: checkIfNumber(intelligence) },
  })
    .select('name requirements category imageUrl customId -_id')
    .lean()) as IWeapon[];

  let categories: ICategoriesVM = {};

  for (const weapon of weapons) {
    const categoryId: string = weapon.category?.toString() || '';
    delete weapon.category;
    if (!Object.keys(categories).includes(categoryId)) {
      let currentCategory = (await Category.findById(categoryId)
        .select('name imageUrl customId -_id')
        .lean()) as ICategoryVM;
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

const getByCategory = async (categoryName: string) => {
  const category = (await Category.findOne({ customId: categoryName })
    .populate('weapons', 'name customId imageUrl -_id')
    .select(['name', '-_id'])
    .lean()) as ICategoryVM;

  if (!category) throw new Error('Weapons not found!');

  return category;
};

const getDetails = async (weaponName: string): Promise<IWeapon> => {
  let weapon = (await Weapon.findOne({ customId: weaponName })
    .select('-_id -createdAt -updatedAt -__v')
    .lean()) as IWeapon;
  if (!weapon) throw new Error('Weapon not found!');
  delete weapon.category;

  return weapon;
};

export default { searchByParams, getByCategory, getDetails };
