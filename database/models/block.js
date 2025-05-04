
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Block extends Model {
    static associate(models) {}
  }

  Block.init({
    bloque: DataTypes.STRING,
    tipoBloque: DataTypes.STRING,
    bioma: DataTypes.STRING,
    uso: DataTypes.TEXT,
    crafteo: DataTypes.TEXT,
    herramienta: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Block',
    tableName: 'blocks', // Nombre de la tabla en minúsculas
    freezeTableName: true // Evita la pluralización automática de la tabla
  });

  return Block;
};
