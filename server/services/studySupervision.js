import models from '../models';

const { StudySupervisionKinya } = models;

class StudySupervisionServices {
  static createStudySupervision = async (data) => {
    const {dataValues} = await StudySupervisionKinya.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'studyBy',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllStudySupervision = async () => {
    const allStudySupervision = await StudySupervisionKinya.findAll();
    return allStudySupervision;
  }
  static getStudySupervision = async (id) => {
    const allStudySupervision = await StudySupervisionKinya.findOne({ where: { id: id } });
    return allStudySupervision;
  }
  static deleteStudySupervision = async (id) => {
    const deletedStudySupervision = await StudySupervisionKinya.destroy(
      { where: { id: id } }
    );
    return deletedStudySupervision;
  }
  static updateStudySupervision = async (newData) => {
    const updatedStudySupervision = await StudySupervisionKinya.update(
      { 
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedStudySupervision;
  }
  static async StudySupervisionExists(attr, val) {
    const studySupervision = await StudySupervisionKinya.findOne({ where: { [attr]: val } });
    return studySupervision;
  }
}

export default StudySupervisionServices;