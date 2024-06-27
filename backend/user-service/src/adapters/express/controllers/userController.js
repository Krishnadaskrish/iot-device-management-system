const User = require('../../../adapters/mongodb/models/user')


const register = async (req, res) => {
    try {
      // Validate the request body
      const {name , email , phone , password} =req.body
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with this email already exists." });
      }
      const normalizedPhone = phone ? `+91${phone}` : null;
  
      // Create a user
      const user = new User({
        name: name,
        email:email,
        phone: normalizedPhone,
        country: country,
        password: password,
      });
  
      await user.save();
  
      res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };


  module.exports = {
    register
  }