const Weapon = require('../models/Weapon');
const Type = require('../models/Type');

exports.getDetails = async (weaponNameParam, typeNameParam) => {
  const weapon = await Weapon.findOne({ id: weaponNameParam })
    .populate('type', ['name'])
    .select(['-_id', '-createdAt', '-updatedAt', '-__v'])
    .lean();
  if (!weapon) throw new Error('Weapon not found!');
  // if (typeNameParam != weapon.type.name.split(' ').join('-'))
  //   throw new Error('Url type does not match original!');
  return weapon;
};

exports.searchByName = async (weaponNameParam) => {
  const weapons = await Weapon.find({ name: { $regex: '^' + name } })
    .select(['name', '-_id'])
    .lean();
  if (!weapons) throw new Error('Weapons not found!');
  return weapons;
};

exports.searchByValues = async (requirements) => {
  const { strength, dexterity, faith, intelligence } = requirements;

  const checkIfNumber = (property) => {
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
  })
    .select(['name', 'requirements', 'type', 'url', 'id', '-_id'])
    .lean();

  let types = {};

  for (let weapon of weapons) {
    delete weapon._id;
    let typeId = weapon.type.toString();
    delete weapon.type;

    if (!Object.keys(types).includes(typeId)) {
      let currentType = await Type.findById(typeId)
        .select(['name', 'url', 'id', '-_id'])
        .lean();
      currentType.weapons = [];
      currentType.weapons.push(weapon);
      types[typeId] = currentType;
    } else {
      types[typeId].weapons.push(weapon);
    }
  }

  return Object.values(types).sort((a, b) => {
    return b.weapons.length - a.weapons.length;
  });
};
