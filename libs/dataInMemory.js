const axios = require("axios");

let dataInMemory = []

module.exports = {
  setData: async () => {
    try {
      await axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
        res.data.map((el) => {
          dataInMemory.push( { id:el.id, name: el.name, img_id: el.reference_image_id })
        });
      });
      console.log('inital setup successfully')
    } catch (error) {
     console.error(error);
    }
  },
  getData: async () =>{
    return dataInMemory
  }
}

