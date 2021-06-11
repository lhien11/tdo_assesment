const db = require('../util/database');

module.exports = class Image {
  constructor(ImageId, ImageDescription, ImagePath) {
    this.ImageId = ImageId;
    this.ImageDescription = ImageDescription;
    this.ImagePath = ImagePath;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM ImageList');
  }

  static post(imgUrl) {
    console.log('post is called: ', imgUrl);
    // console.log('imgUrl: ', imgUrl);
    return db.execute('INSERT INTO images (imgUrl) VALUES (?)', [imgUrl]);
  }

  static update(id, item) {
    return db.execute('UPDATE images SET item = ? WHERE id = ?', [item, id, imgUrl]);
  }

  static findById(id) {
    return db.execute('SELECT * FROM images WHERE images.id = ?');
  }

  static delete(id) {
    return db.execute('DELETE FROM images WHERE id = ?', [id]);
  }
};
