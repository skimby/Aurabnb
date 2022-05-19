'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.hasMany(models.Image,
        { foreignKey: 'reviewId' })

      Review.belongsTo(models.User,
        { foreignKey: 'userId' })

      Review.belongsTo(models.Spot,
        { foreignKey: 'spotId' })
    }
  }
  Review.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: DataTypes.TEXT,
    stars: DataTypes.INTEGER(5)
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
