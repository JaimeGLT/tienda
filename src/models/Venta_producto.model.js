const { DataTypes } = require('sequelize');

module.exports = database => {

    database.define('Venta_Producto', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        id_product: {
            type: DataTypes.UUID,
            allowNull: false
        },
        id_venta: {
            type: DataTypes.UUID,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subtotal_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }

    });

};