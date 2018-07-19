const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoCardSchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    date: { type: Date, default: Date.now }
  });
  const InfoCard = mongoose.model('InfoCard', InfoCardSchema);
  module.exports = InfoCard;