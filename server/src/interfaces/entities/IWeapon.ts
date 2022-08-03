import mongoose from 'mongoose';

import IBaseModel from './IBaseModel';

interface IRequirements {
  strength: number;
  dexterity: number;
  intelligence: number;
  faith: number;
}

interface IBonus {
  strength?: string;
  dexterity?: string;
  intelligence?: string;
  faith?: string;
}

interface IDamage {
  physical: number;
  magic: number;
  lightning: number;
  fire: number;
}

interface IWeapon extends mongoose.Document, IBaseModel {
  _id: string;
  weight: number;
  durability: number;
  attack_type: string;
  category?: mongoose.Types.ObjectId;
  requirements: IRequirements;
  bonus: IBonus;
  damage: IDamage;
}

export { IRequirements, IBonus, IDamage };
export default IWeapon;
