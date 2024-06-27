const { createUser } = require('../use-cases/userUseCases');



const registerUser = async (userData) => {
    try {
      const newUser = await createUser(userData);
      return newUser;
    } catch (err) {
      throw new Error('Failed to register user');
    }
  };
  
  module.exports = { registerUser }