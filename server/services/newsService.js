import models from '../models';

const { NewKinya } = models;

class NewsServices {
  static createNews = async (data) => {
    const {dataValues} = await NewKinya.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'userId',
        'title',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllNews = async () => {
    const allNews = await NewKinya.findAll();
    return allNews;
  }
  static getNews = async (id) => {
    const allNews = await NewKinya.findOne({ where: { id: id } });
    return allNews;
  }
  static deleteNews = async (id) => {
    const deletedNews = await NewKinya.destroy(
      { where: { id: id } }
    );
    return deletedNews;
  }
  static updateNews = async (newData) => {
    const updatedNews = await NewKinya.update(
      { 
        title: newData.title,
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedNews;
  }
  static async newsExists(attr, val) {
    const news = await NewKinya.findOne({ where: { [attr]: val } });
    return news;
  }
}

export default NewsServices;