import mongoose from 'mongoose';

import Category from '../../models/Category';
import Weapon from '../../models/Weapon';

const relationMapper = async () => {
  const categoriesData = await Category.find({});
  for (let category of categoriesData) {
    const weaponsData = await Weapon.find({});
    for (let weapon of weaponsData) {
      if (weapon.category._id.toString() === category._id.toString()) {
        const currentId = new mongoose.Types.ObjectId(weapon._id);
        category.weapons.push(currentId);
      }
    }
    await category.save();
  }
};

export default relationMapper;
