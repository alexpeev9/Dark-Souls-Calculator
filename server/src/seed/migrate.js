const mongoose = require('mongoose');
const Type = require('../models/Type');
const Weapon = require('../models/Weapon');
const User = require('../models/User');
const { authPass } = require('../utils/envParams');
const connectionString = require('../utils/connectionString');
const typeSeed = require('./typeSeed.json');
const weaponSeed = require('./weaponSeed.json');
try {
  seedData();
} catch (er) {
  console.log(err.stack);
  process.exit(1);
}
async function seedData() {
  await mongoose.connect(connectionString());
  if (await Type.findOne({ name: 'Type' })) {
    console.log('Db Already Exists.');
    return process.exit(0);
  }
  let user = new User({
    username: 'admink9',
    isAdmin: true,
    password: authPass,
  });
  await user.save();
  for (let type of typeSeed) {
    type.name = type.name;
    type.id = type.name.slice().toLowerCase().split(' ').join('-');
    let typeEntity = new Type(type);
    await typeEntity.save();
  }
  for (let weapon of weaponSeed) {
    weapon.url =
      weapon.name.slice().toLowerCase().split(' ').join('_').replace("'", '') +
      '.png';
    weapon.id = weapon.name.slice().toLowerCase().split(' ').join('-');
    let weaponEntity = new Weapon(weapon);
    await weaponEntity.save();
  }
  let types = await Type.find({});
  for (let type of types) {
    let weapons = await Weapon.find({});
    for (let weapon of weapons) {
      if (weapon.type._id.toString() === type._id.toString()) {
        type.weapons.push(weapon);
      }
    }
    await type.save();
  }
  await mongoose.disconnect();
  console.log('Migration Completed.');
  process.exit(0);
}
