const { DataTypes } = require('sequelize');

module.exports = database => {

    database.define('Cart', {

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
        id_user: {
            type: DataTypes.UUID,
            allowNull: false
        },
        date_added: {
            type: DataTypes.DATEONLY,
            defaultValue: () => new Date(),
            allowNull: false,
        }

    });

}