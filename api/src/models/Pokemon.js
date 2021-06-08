const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
  },
  name:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  hp:{type: DataTypes.INTEGER,},
  str: {type: DataTypes.INTEGER,},
  def: {type: DataTypes.INTEGER,},
  spd: {type: DataTypes.INTEGER,},
  height: {type: DataTypes.INTEGER,},
  weight: {type: DataTypes.INTEGER,}  
  });
};
