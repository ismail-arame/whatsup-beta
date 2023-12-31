const createHttpError = require("http-errors");
const { UserModel } = require("../models");

exports.findUser = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) {
    throw createHttpError.BadRequest("this account no longer exist.");
  }
  return user;
};

exports.searchUsersService = async (keyword, userId) => {
  // perform a search in the UserModel using a regular expression (regex) to find users whose name matches the provided keyword case-insensitively and then remove the result which has the logged in user id
  const users = await UserModel.find(
    {
      name: { $regex: keyword, $options: "i" },
      _id: { $ne: userId },
    },
    // Specify the fields you want to include/exclude. Set password: 0 to exclude the password field.
    { password: 0 }
  );
  return users;
};
