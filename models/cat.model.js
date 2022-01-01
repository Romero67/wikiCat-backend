const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
 id:{
  type: String, 
  required: true,
  unique:true
 },
 name: {
  type: String,
  required: true,
  unique: true
 },
 contador: {
  type: Number,
  default: 0
 },
 img_id:{
  type: String
 }
},{
 timestamps: true
});

module.exports = mongoose.model('Cat', catSchema);