import mongoose from 'mongoose';

import IBaseModel from './IBaseModel';

interface ICategory extends mongoose.Document, IBaseModel {
  _id: string;
  description?: string;
  weapons: mongoose.Types.ObjectId[];
}

export default ICategory;
