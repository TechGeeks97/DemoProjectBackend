const Analytics = require("../models/analytics");
const asyncHandler = require("../middleware/async");

// @desc Get Analytics
// @route Get /api/analytics/
// @access Public
exports.getAnalytics = asyncHandler(async (req, res, next) => {
  try {
    const analytics = await Analytics.find();
    return res.status(200).json({ message: "Success", data: analytics });
  } catch (error) {
    return res.status(500).json({ message: "Failed!", error: error.message });
  }
});

// @desc Save Analytics
// @route POST /api/analytics/
// @access Public
exports.saveAnalytics = asyncHandler(async (req, res, next) => {
  try {
    const data = req.body;
    //   data.map()
    const analytics = await Analytics.create(data);
    return res.status(200).json({ message: "Success", data: analytics });
  } catch (error) {
    return res.status(500).json({ message: "Failed!", error: error.message });
  }
});

// @desc Update Analytics
// @route PUT /api/analytics/:id
// @access Public
exports.updateAnalytics = asyncHandler(async (req, res, next) => {
  try {
    console.log(req.query.id);
    const id = req.query.id;

    if (!id)
      return res
        .status(500)
        .json({ message: "Provide the id of the data you want to update" });

    const analytics = await Analytics.findByIdAndUpdate(id, req.body);

    if (!analytics)
      return res
        .status(400)
        .json({ message: "No data found for the provided id" });
    else
      return res
        .status(200)
        .json({ message: "Successfully updated analytics", data: analytics });
  } catch (error) {
    return res.status(500).json({ message: "Failed!", error: error.message });
  }
});

// @desc Delete Analytics
// @route DELETE /api/analytics/:id
// @access Public
exports.deleteAnalytics = asyncHandler(async (req, res, next) => {
  try {
    const id = req.query.id;

    if (!id)
      return res
        .status(500)
        .json({ message: "Provide the id of the data you want to update" });

    const analytics = await Analytics.findByIdAndDelete(id);

    if (!analytics)
      return res
        .status(400)
        .json({ message: "No data found for the provided id" });
    else
      return res
        .status(200)
        .json({ message: "Successfully removed analytics data" });
  } catch (error) {
    return res.status(500).json({ message: "Failed!", error: error.message });
  }
});
