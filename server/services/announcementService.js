import models from '../models';

const { AnnouncementKinya } = models;

class AnnouncementService {
  static async saveAnnouncement(announcement) {
    const acceptedAnnouncement = await AnnouncementKinya.create(
      {
        ...announcement,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['announcedBy', 'title', 'announcement'],
      }
    );

    return acceptedAnnouncement;
  }
  static getAllAnnouncement = async () => {
    const allAnnouncements = await AnnouncementKinya.findAll();
    return allAnnouncements;
  };
  static getAnnouncement = async (id) => {
    const allAnnouncements = await AnnouncementKinya.findOne({ where: { id: id } });
    return allAnnouncements;
  };
  static deleteAnnouncement = async (id) => {
    const deletedAnnouncement = await AnnouncementKinya.destroy({ where: { id: id } });
    return deletedAnnouncement;
  };
  static updateAnnouncement = async (newData) => {
    const updatedAnnouncement = await AnnouncementKinya.update(
      {
        title: newData.title,
        announcement: newData.announcement,
      },
      { where: { id: newData.id } }
    );
    return updatedAnnouncement;
  };
  static async AnnouncementExists(attr, val) {
    const announcement = await AnnouncementKinya.findOne({ where: { [attr]: val } });
    return announcement;
  }
}

export default AnnouncementService;
