const Type = require('../models/Type');
const Weapon = require('../models/Weapon');

exports.getAll = async () => {
  const types = await Type.find().select(['name', 'id', '-_id']).lean();
  return types;
};

exports.getType = async (typeParam) => {
  const type = await Type.findOne({ id: typeParam })
    .populate('weapons', ['name', 'id', 'url'])
    .select(['name', '-_id'])
    .lean();
  if (!type) throw new Error('Type not found!');

  type.weapons.map((w) => {
    delete w._id;
  });

  return type;
};

exports.create = async (nameParam) => {
  const name = nameParam.toLowerCase();
  if (!name) throw new Error('Name must be filled!');

  const duplicateUsername = await Type.findOne({ name });
  if (duplicateUsername) throw new Error('Type already exits!');

  await Type.create({
    name,
  });
  return `${nameParam} successfully created.`;
};

exports.update = async (nameParam, newNameParam) => {
  const name = nameParam.split('-').join(' ');
  const newName = newNameParam.toLowerCase();
  const typeEntity = await Type.findOne({ name });
  if (!typeEntity) throw new Error('Type does not exits!');

  await Type.updateOne(
    { name: typeName },
    { $set: { name: newName } },
    { runValidators: true }
  );

  return `${newNameParam} successfully updated.`;
};

exports.remove = async (nameParam) => {
  let name = nameParam.split('-').join(' ');
  const type = await Type.findOne({ name });
  if (!type) throw new Error('Type does not exits!');

  await type.remove();

  return `${name} successfully deleted.`;
};

exports.addWeapon = async (typeNameParam, weaponNameParam) => {
  const typeName = typeNameParam.split('-').join(' ');
  const weaponName = weaponNameParam.split('-').join(' ');

  const typeEntity = await Type.findOne({ name: typeName });
  if (!typeEntity) throw new Error(`${typeName} type does not exits!`);

  const weaponEntity = await Weapon.findOne({ name: weaponName });
  if (!weaponEntity) throw new Error(`${weaponName} weapon does not exits!`);

  const hasWeapon = typeEntity.weapons.includes(weaponEntity._id);
  if (hasWeapon) throw new Error(`${typeName} has ${weaponName}!`);

  await Type.updateOne(
    { name: typeName },
    { $push: { weapons: weaponEntity } },
    { runValidators: true }
  );

  return `Successfully added ${weaponName} to ${typeName}!`;
};

exports.removeWeapon = async (typeNameParam, weaponNameParam) => {
  const typeName = typeNameParam.split('-').join(' ');
  const weaponName = weaponNameParam.split('-').join(' ');

  const typeEntity = await Type.findOne({ name: typeName });
  if (!typeEntity) throw new Error(`${typeName} does not exits!`);

  const weaponEntity = await Weapon.findOne({ name: weaponName });
  if (!weaponEntity) throw new Error(`${weaponName} does not exits!`);

  const hasWeapon = typeEntity.weapons.includes(weaponEntity._id);
  if (!hasWeapon) throw new Error(`${typeName} does not have ${weaponName}!`);

  await Type.updateOne(
    { name: typeName },
    { $pull: { weapons: { $in: [weaponEntity] } } },
    { runValidators: true }
  );

  return `Successfully removed ${weaponName} from ${typeName}!`;
};
