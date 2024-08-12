const { DataTypes } = require('sequelize');


module.exports = database => {

    database.define('User', {

      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      direction: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      phone_number: {
        type: DataTypes.NUMBER(20), 
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      }

    });

};