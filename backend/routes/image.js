const express = require('express');

const imageController = require('../controllers/image');

const router = express.Router();

router.get('/', imageController.getAllImage);

router.post('/', imageController.postImageUrl);

router.put('/', imageController.putImageData);

router.delete('/:id', imageController.deleteImageData);

module.exports = router;
