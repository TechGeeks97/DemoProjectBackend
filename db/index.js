const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  const connect = await mongoose.connect(
    `${process.env.MONGO_URI}${process.env.DB_NAME}`
  );
  console.log(`MongoDb Connected to ${connect.connection.host}`.green.bold);
};
module.exports = connectDB;
