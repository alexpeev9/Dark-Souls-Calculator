import mongoose from 'mongoose';

import User from '../models/User';
import connectionString from '../utils/connectionString';
import categoryMapper from './mappers/categoryMapper';
import relationMapper from './mappers/relationMapper';
import userMapper from './mappers/userMapper';
import weaponMapper from './mappers/weaponMapper';

async function seed() {
  try {
    console.log('Migration has started...');
    await mongoose.connect(connectionString);

    await userMapper();
    await categoryMapper();
    await weaponMapper();
    await relationMapper();

    await mongoose.disconnect();
    console.log('Initial migration has completed');
    return process.exit(0);
  } catch (err: any) {
    console.log(err.stack);
    return process.exit(1);
  }
}

seed();
