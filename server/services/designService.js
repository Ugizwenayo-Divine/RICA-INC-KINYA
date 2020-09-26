import models from '../models';

const { DesignKinya } = models;

class DesignServices {
  static createDesign = async (data) => {
    const {dataValues} = await DesignKinya.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'designBy',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllDesign = async () => {
    const allDesign = await DesignKinya.findAll();
    return allDesign;
  }
  static getDesign = async (id) => {
    const allDesign = await DesignKinya.findOne({ where: { id: id } });
    return allDesign;
  }
  static deleteDesign = async (id) => {
    const deletedDesign = await DesignKinya.destroy(
      { where: { id: id } }
    );
    return deletedDesign;
  }
  static updateDesign = async (newData) => {
    const updatedDesign = await DesignKinya.update(
      { 
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedDesign;
  }
  static async DesignExists(attr, val) {
    const design = await DesignKinya.findOne({ where: { [attr]: val } });
    return design;
  }
}

export default DesignServices;