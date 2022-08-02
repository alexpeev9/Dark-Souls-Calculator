import { Schema, model } from 'mongoose';

import IWeapon from '../interfaces/entities/IWeapon';

const WeaponSchema = new Schema<IWeapon>(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      unique: true,
      minLength: [2, 'Name cannot be less than 5 characters.'],
      maxLength: [40, 'Username cannot be more than 40 characters.'],
    },
    customId: {
      type: String,
      required: [true, 'CustomId is required!'],
      unique: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'Url is required!'],
      validate: [/[.*\.png.*]/, 'Url should end with .png'],
      unique: true,
    },
    weight: {
      type: Number,
      required: [true, 'Weight is required!'],
      min: [0, 'Weight cannot be less than 0.'],
      max: [30, 'Weight cannot be more than 30.'],
    },
    durability: {
      type: Number,
      required: [true, 'Durability Type is required!'],
      min: [0, 'Durability cannot be less than 0.'],
      max: [1000, 'Durability cannot be more than 1000.'],
    },
    attack_type: {
      type: String,
      required: [true, 'Attack Type Type is required!'],
      minLength: [3, 'Attack Type cannot be less than 3 characters.'],
      maxLength: [20, 'Attack Type cannot be more than 20 characters.'],
    },
    category: {
      type: Schema.Types.ObjectId,
      required: [true, 'Weapon Category is required!'],
      ref: 'Category',
    },
    requirements: {
      faith: {
        type: Number,
        default: 0,
        min: [0, 'Faith Requirement cannot be less than 0.'],
        max: [99, 'Faith Requirement cannot be more than 99.'],
      },
      strength: {
        type: Number,
        default: 0,
        min: [0, 'Strength Requirement cannot be less than 0.'],
        max: [99, 'Strength Requirement cannot be more than 99.'],
      },
      intelligence: {
        type: Number,
        default: 0,
        min: [0, 'Intelligence Requirement cannot be less than 0.'],
        max: [99, 'Intelligence Requirement cannot be more than 99.'],
      },
      dexterity: {
        type: Number,
        default: 0,
        min: [0, 'Dexterity Requirement cannot be less than 0.'],
        max: [99, 'Dexterity Requirement cannot be more than 99.'],
      },
    },
    bonus: {
      faith: {
        type: String,
        default: null,
        enum: {
          values: ['S', 'A', 'B', 'C', 'D', 'E', null],
          message:
            "Faith Bonus can only be: 'S', 'A', 'B', 'C', 'D', 'E' or null.",
        },
      },
      strength: {
        type: String,
        default: null,
        enum: {
          values: ['S', 'A', 'B', 'C', 'D', 'E', null],
          message:
            "Strength Bonus can only be: 'S', 'A', 'B', 'C', 'D', 'E' or null.",
        },
      },
      intelligence: {
        type: String,
        default: null,
        enum: {
          values: ['S', 'A', 'B', 'C', 'D', 'E', null],
          message:
            "Intelligence Bonus can only be: 'S', 'A', 'B', 'C', 'D', 'E' or null.",
        },
      },
      dexterity: {
        type: String,
        default: null,
        enum: {
          values: ['S', 'A', 'B', 'C', 'D', 'E', null],
          message:
            "Dexterity Bonus can only be: 'S', 'A', 'B', 'C', 'D', 'E' or null.",
        },
      },
    },
    damage: {
      physical: {
        type: Number,
        default: 0,
        min: [0, 'Physical Damage cannot be less than 0.'],
        max: [400, 'Physical Damage cannot be more than 400.'],
      },
      magic: {
        type: Number,
        default: 0,
        min: [0, 'Magic Damage cannot be less than 0.'],
        max: [400, 'Magic Damage cannot be more than 400.'],
      },
      lightning: {
        type: Number,
        default: 0,
        min: [0, 'Lightning Damage cannot be less than 0.'],
        max: [400, 'Lightning Damage cannot be more than 400.'],
      },
      fire: {
        type: Number,
        default: 0,
        min: [0, 'Fire Damage cannot be less than 0'],
        max: [400, 'Fire Damage cannot be more than 400'],
      },
    },
  },
  { timestamps: true }
);
const Weapon = model('Weapon', WeaponSchema);

export default Weapon;
