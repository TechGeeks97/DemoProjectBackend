const express = require("express");
const {
  getAnalytics,
  saveAnalytics,
  updateAnalytics,
  deleteAnalytics,
} = require("../controllers/analytics");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAnalytics)
  .post(saveAnalytics)
  .put(updateAnalytics)
  .delete(deleteAnalytics);

module.exports = router;
