const categoryService = require('../services/category_service');

const createCategory = async (req, res) => {
  const category = res.locals.category;
  console.log(category);
  try {
    const category_ref = await categoryService.create_category(category);
    return res.send(category_ref);
  } catch (error) {
    console.log(error.message);
    return res.status(error.status).json(error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    const category_list = await categoryService.get_category();
    return res.json(category_list).status(200);
  } catch (error) {
    console.log(error.message);
    return res.status(error.status).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { category_id } = req.body;
    if (category_id == null)
      return res.json({ error: "User id has to be sent" }).status(423);

    await categoryService.delete_category(category_id);
    return res.send("Success");
  } catch (error) {
    console.log(error.message);
    return res.status(error.status).json(error.message);
  }
};

const updateCategory = async (req, res) => {
  const updated_category = res.locals.updated_category;
  console.log(updated_category);
  try {
    const category_ref = await categoryService.update_category(updated_category);
    return res.json({ category: category_ref });
  } catch (error) {
    console.log(error.message);
    return res.status(error.status).json(error.message);
  }
};

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory
};
