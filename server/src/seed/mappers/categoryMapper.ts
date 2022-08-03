import categoryData from '../data/categoryData.json';
import Category from '../../models/Category';

const categoryMapper = async (): Promise<void> => {
  if (await Category.findOne({ name: 'Category' })) {
    throw new Error('Database already has categories!');
  }
  const data = [...categoryData];
  for (let categoryData of data) {
    let categoryEntity = new Category(categoryData);
    categoryEntity.customId = categoryData.name
      .toLowerCase()
      .split(' ')
      .join('-');
    await categoryEntity.save();
  }
};

export default categoryMapper;
