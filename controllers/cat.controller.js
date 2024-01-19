const axios = require("axios");
const dataInMemory = require('../libs/dataInMemory');

exports.breeds = async (req, res) => {
  try {
    console.log("aqui: ",await dataInMemory.getData())
   res.json(await dataInMemory.getData())
  } catch (error) {
   console.error(error);
  }
};

exports.breedSumCount = (req, res) => {
  return res.sendStatus(200)
}

exports.getBreed = (req, res) => {
  try {
    axios.get(`https://api.thecatapi.com/v1/images/${req.body.img_id}`).then(response => res.json(response.data));
  } catch (error) {
    res.status(400).json({
      error: 'An error ocurried'
    })
  }
}

exports.getBreedById = (req, res) => {
  try {
    axios.get(`https://api.thecatapi.com/v1/breeds/${req.body.id}`).then(response => res.json(response.data));
  } catch (error) {
    res.status(400).json({
      error: 'An error ocurried'
    })
  }
}

exports.getImagesBreed = (req, res) => {
  try {
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${req.body.id}&include_breeds=true&limit=8`).then(response => res.json(response.data));
  } catch (error) {
    res.status(400).json({
      error: 'An error ocurried'
    })
  }
  
}
