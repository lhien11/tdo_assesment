const Image = require('../models/image');

exports.getAllImage = async (req, res, next) => {
  try {
    const [allImage] = await Image.fetchAll();
    res.status(200).json(allImage);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postImageUrl = async (req, res, next) => {
  try {
    const postResponse = await Image.post(req.body.item);
    console.log("postREsponse: ", postResponse);
    res.status(201).json(postResponse);
  } catch (err) {

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putImageData = async (req, res, next) => {
  try {
    const putResponse = await Image.update(req.body.id, req.body.item);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.deleteImageData = async (req, res, next) => {
  try {
    const deleteResponse = await Image.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
