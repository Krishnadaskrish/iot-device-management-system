const User = require('../../adapters/mongodb/models/user')


const createUser = async ({ name, email,phone, password }) => {
    const newUser = new User({ name, email,phone, password });
    await newUser.save();
    return newUser;
  };
  
  module.exports = { createUser };