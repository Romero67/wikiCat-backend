const Cat = require('../models/cat.model');
const axios = require("axios");

exports.breeds = (req, res) => {
  try {
   Cat.find().exec((err, data) => {
    if(err){
     return res.status(400).json({
      error: 'An error ocurried while trying get the breeds cat'
     })
    }
    res.json(data);
   })
  } catch (error) {
   console.error(error);
  }
};

exports.breedSumCount = (req, res) => {
  Cat.findByIdAndUpdate(req.body.id, {contador: req.body.contador}, (err, data) => {
    if(err){
      return res.status(400).json({
        error: 'An error ocurried while updating the cat'
      })
    }
    console.log(req.body)
    res.json({
      message: 'Count update successfully'
    });
  })
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
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${req.body.id}`).then(response => res.json(response.data));
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
