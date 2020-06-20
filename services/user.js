const User = require("../schema/user");

const UserService = {};

UserService.newUser = data => {
  return new Promise(async (resolve, reject) => {
    User.create(data)
      .then(() => {
        resolve({
          success: true,
          msg: "User created"
        });
      })
      .catch(err => {
        console.log("Error : ", err.message);
        reject({
          success: false,
          msg: "User creation error"
        });
      });
  });
};

module.exports = UserService;
