const products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findOne(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct);
  });
}

function update(id, data) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { ...data, id };
    writeDataToFile('./data/products.json', products);
    resolve(products[index]);
  });
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
};
