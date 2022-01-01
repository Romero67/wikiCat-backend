const express = require('express');
const router = express.Router();

const {breeds, breedSumCount, getBreed, getBreedById, getImagesBreed} = require('../controllers/cat.controller')

router.get('/breeds', breeds);
router.post('/breedImg', getBreed);
router.post('/breedId', getBreedById);
router.post('/imagesBreed', getImagesBreed);
router.post('/sumCount', breedSumCount);

module.exports = router;