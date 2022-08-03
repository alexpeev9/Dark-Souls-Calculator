import weaponData from '../data/weaponData.json';
import Weapon from '../../models/Weapon';

const categoryMapper = async (): Promise<void> => {
  if (await Weapon.findOne({ name: 'Weapon' })) {
    throw new Error('Database already has weapons!');
  }
  const data = [...weaponData];
  for (let weaponData of data) {
    let weaponEntity = new Weapon(weaponData);
    weaponEntity.customId = weaponData.name.toLowerCase().split(' ').join('-');
    weaponEntity.imageUrl =
      weaponData.name.toLowerCase().split(' ').join('_') + '.png';
    await weaponEntity.save();
  }
};

export default categoryMapper;
