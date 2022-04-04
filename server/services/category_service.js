const repository = require('../repositories/index');

const create_category = (category) => {
  try {
    const category_ref = repository.create_category(category);
    return category_ref;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const update_category = async (updated_category) => {
  try {
    const category = await repository.update_category(updated_category);
    return category;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const delete_category = async (category_id) => {
  try {
    await repository.delete_category(category_id);
    return;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const get_category = async (category_id) => {
  try {
    const category_list = await repository.get_category();
    return category_list;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  create_category,
  update_category,
  delete_category,
  get_category,
};
