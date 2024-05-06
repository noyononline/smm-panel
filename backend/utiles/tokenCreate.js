const jwt = require("jsonwebtoken");

module.exports.tokenCreate = async (data) => {
  const token = await jwt.sign(data, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};
