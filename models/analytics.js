const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema({
  campaignName: {
    type: String,
    required: [true, "Please give a Campaign Name"],
    unique: true,
  },
  clicks: {
    type: Number,
    required: [true, "Please give the number of clicks"],
  },
  impressions: {
    type: Number,
    required: [true, "Please give the number of impressions"],
  },
  conversions: {
    type: Number,
    required: [true, "Please give the number of Conversions"],
  },
  cost: {
    type: Number,
    required: [true, "Please give the cost"],
  },
  startDate: {
    type: String,
    required: [true, "Please give the cost"],
  },
  endDate: {
    type: String,
    required: [true, "Please give the cost"],
  },
});

module.exports = mongoose.model("Analytics", AnalyticsSchema);
