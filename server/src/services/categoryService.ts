import Category from '../models/Category';
import ICategory from '../interfaces/entities/ICategory';

const getAll = async (): Promise<ICategory[]> => {
  const categories = await Category.find()
    .select(['name', 'customId', '-_id'])
    .lean();
  return categories as ICategory[];
};

const create = async (name: string): Promise<string> => {
  const customId: string = name.toLowerCase().split(' ').join('-');
  if (!name) throw new Error('Name must be filled!');

  const duplicateType = await Category.findOne({ customId });
  if (duplicateType) throw new Error('Category already exits!');

  // TODO: Update Image
  const imageUrl = name.toLowerCase().split(' ').join('_') + '.png';

  await Category.create({
    name,
    customId,
    imageUrl,
  });

  return `${name} successfully created.`;
};

const update = async (customId: string, name: string): Promise<string> => {
  if (!name) throw new Error('Name is not defined!');

  const categoryEntity = await Category.findOne({ customId });
  if (!categoryEntity) throw new Error('Category does not exits!');

  const customIdNew = name.toLowerCase().split(' ').join('-');
  const categoryNewEntity = await Category.findOne({ customId: customIdNew });
  if (categoryNewEntity) throw new Error('Category name is taken!');

  // TODO: Update Image
  // const imageUrl = name.toLowerCase().split(' ').join('_') + '.png';

  await Category.updateOne(
    { customId },
    { $set: { name: name, customId: customIdNew } }, // TODO: add imageUrl
    { runValidators: true }
  );

  return `${categoryEntity.name} update to ${name}.`;
};

const remove = async (customId: string): Promise<string> => {
  const category = await Category.findOne({ customId });
  if (!category) throw new Error('Category does not exits!');

  await category.remove();
  // TODO: Remove references from Weapons.

  return `${category.name} successfully deleted.`;
};

export default { getAll, create, update, remove };
