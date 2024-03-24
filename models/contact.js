const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  favoriteFoods: {
    type: [String],
    default: [],
  },
});

const contact =(mongoose.model=("contact", contactSchema));
module.exports = contact;


