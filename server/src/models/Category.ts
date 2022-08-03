import { Schema, Types, model } from 'mongoose';

import ICategory from '../interfaces/entities/ICategory';

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      unique: true,
      minLength: [3, 'Name cannot be less than 3 characters'],
      maxLength: [20, 'Name cannot be more than 20 characters'],
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
    description: {
      type: String,
      required: [false],
      minLength: [3, 'Description cannot be less than 70 characters'],
      maxLength: [1000, 'Description cannot be more than 20 characters'],
    },
    weapons: [
      {
        type: Types.ObjectId,
        ref: 'Weapon',
      },
    ],
  },
  { timestamps: true }
);

const Category = model<ICategory>('Category', CategorySchema);

export default Category;
