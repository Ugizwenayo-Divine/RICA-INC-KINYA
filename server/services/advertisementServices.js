import models from '../models';

const { AdvertisementKinya } = models;

class AdvertisementServices {
  static createAdvertisement = async (data) => {
    const {dataValues} = await AdvertisementKinya.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'advertisedBy',
        'title',
        'description',
        'type',
        'advertisingCompany',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllAdvertisement = async () => {
    const allAdvertisement = await AdvertisementKinya.findAll();
    return allAdvertisement;
  }
  static getAdvertisement = async (id) => {
    const allAdvertisement = await AdvertisementKinya.findOne({ where: { id: id } });
    return allAdvertisement;
  }
  static deleteAdvertisement = async (id) => {
    const deletedAdvertisement = await AdvertisementKinya.destroy(
      { where: { id: id } }
    );
    return deletedAdvertisement;
  }
  static updateAdvertisement = async (newData) => {
    const updatedAdvertisement = await AdvertisementKinya.update(
      { 
        title: newData.title,
        description: newData.description,
        type: newData.type,
        advertisingCompany: newData.advertisingCompany,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedAdvertisement;
  }
  static async advertisementExists(attr, val) {
    const advertisement = await AdvertisementKinya.findOne({ where: { [attr]: val } });
    return advertisement;
  }
  static getAllAdvertisementByType = async (type) => {
    const allAdvertisement = await AdvertisementKinya.findAll({ where: { type: type } });
    return allAdvertisement;
}
}

export default AdvertisementServices;