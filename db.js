const { Sequelize } = require('sequelize');
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } = require('./secure/secure');

// models
const productModel = require('./src/models/Product.model');
const userModel = require('./src/models/User.model');
const cartModel = require('./src/models/Carrito.model');
const venta_productoModel = require('./src/models/Venta_producto.model');
const ventaModel = require('./src/models/Venta.model');

const database = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{ logging: false })

productModel(database);
// userModel(database);
// cartModel(database);
// ventaModel(database);

// const { User, Product, Cart, Venta_Product, Venta } = database.models;
console.log(database.models);

module.exports = {
    database,
    ...database.models
}