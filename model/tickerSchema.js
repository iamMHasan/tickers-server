const mongoose = require("mongoose")

// Define schema for the ticker data
const tickerSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
  });

  const ticker = mongoose.model('Ticker', tickerSchema)

  module.exports = ticker

