const { DataTypes } = require('sequelize');

module.exports = database => {

    database.define('Venta', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        id_user: {
            type: DataTypes.UUID,
            allowNull: false
        },
        total_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        purchase_date: {
            type: DataTypes.DATEONLY,
            defaultValue: () => new Date()
        },
        purchase_time: {
            type: DataTypes.TIME,   
            defaultValue: () => new Date().toLocaleTimeString('es-BO', { hour12: false })
        }


    })

};