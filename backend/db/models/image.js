'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Spot,
        { foreignKey: 'spotId' })

      Image.belongsTo(models.Review,
        { foreignKey: 'reviewId' })

      // Image.hasMany(models.Booking,
      //   { through: models.Booking })
    }
  }
  Image.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageableType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
