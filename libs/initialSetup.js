const Cat = require("../models/cat.model");
const axios = require("axios");

exports.initalCats = async () => {
  const count = await Cat.estimatedDocumentCount();

  if (count > 0) return;
  
  try {
    await axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
      res.data.map((el) => {
        new Cat({ id:el.id, name: el.name, img_id: el.reference_image_id }).save();
      });
    });
    console.log('inital setup successfully')
  } catch (error) {
   console.error(error);
  }
};
