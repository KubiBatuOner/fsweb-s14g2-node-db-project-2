const db = require("../../data/db-config");

const getAll = () => {
  // HOKUS POKUS
  return db("cars");
};

const getById = (id) => {
  // HOKUS POKUS
  return db("cars").where("id", id).first();
};

const create = (car) => {
  // HOKUS POKUS
  const insertedCars = db("cars")
    .insert(car)
    .then((id) => {
      return getById(id[0]);
    });
  return insertedCars;
};

module.exports = {
  getAll,
  getById,
  create,
};
