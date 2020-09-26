'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnnouncementKinya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AnnouncementKinya.belongsTo(models.User, { foreignKey: 'announcedBy' });
    }
  }
  AnnouncementKinya.init(
    {
      announcedBy: DataTypes.INTEGER,
      title: DataTypes.STRING,
      announcement: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'AnnouncementKinya',
    }
  );
  return AnnouncementKinya;
};
