'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudySupervisionKinya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudySupervisionKinya.belongsTo(models.User, { foreignKey: 'studyBy' });
    }
  };
  StudySupervisionKinya.init({    
    studyBy: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    cloudinaryId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'StudySupervisionKinya',
  });
  return StudySupervisionKinya;
};