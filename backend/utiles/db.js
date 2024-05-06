const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("database connected...");
  } catch (error) {
    console.log(error.message);
  }
};
