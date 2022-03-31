const repository = require('../repositories/index');

const create_category = (category) => {
  try {
    const category_ref = repository.create_category(category);
    return category_ref;
  } catch (error) {
    throw error;
  }
};

const update_category = async (updated_category) => {
  try {
    const category = await repository.update_category(updated_category);
    return category;
  } catch (error) {
    throw error;
  }
};

const delete_category = async (category_id) => {
  try {
    await repository.delete_category(category_id);
    return;
  } catch (error) {
    throw error;
  }
}



module.exports = {
  create_category,
  update_category,
  delete_category
};
