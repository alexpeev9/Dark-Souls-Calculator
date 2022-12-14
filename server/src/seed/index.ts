import mongoose from 'mongoose';

import userMapper from './mappers/userMapper';
import categoryMapper from './mappers/categoryMapper';
import weaponMapper from './mappers/weaponMapper';
import relationMapper from './mappers/relationMapper';
import env from '../env';

async function seed(): Promise<never> {
  try {
    console.log('Migration has started...');

    await mongoose.connect(env.connectionString);

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
