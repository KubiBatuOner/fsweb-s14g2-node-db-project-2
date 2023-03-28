// ESNEK
const defaultCars = [
  {
    vin: "13579846202468975",
    make: "toyota",
    model: "supra",
    mileage: 20000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "12345678987654321",
    make: "ford",
    model: "gt",
    mileage: 10000,
    title: "clean",
    transmission: "automatic",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};
