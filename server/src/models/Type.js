const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const typeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      index: [true, 'Name is taken!'],
      unique: true,
      minLength: [3, 'Name cannot be less than 3 characters'],
      maxLength: [20, 'Name cannot be more than 20 characters'],
    },
    id: {
      type: String,
      required: [true, 'Id is required!'],
      index: [true, 'Id is taken!'],
      unique: true,
    },
    url: {
      type: String,
      required: [true, 'Url is required!'],
      index: [true, 'Url is taken!'],
      validate: [/[.*\.png.*]/, 'Url should end with .png'],
      unique: true,
    },
    description: {
      type: String,
      // required: [true, 'Description is taken!'],
      minLength: [3, 'Description cannot be less than 70 characters'],
      maxLength: [1000, 'Description cannot be more than 20 characters'],
    },
    weapons: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Weapon',
      },
    ],
  },
  { timestamps: true }
);
const Type = mongoose.model('Type', typeSchema);
module.exports = Type;
