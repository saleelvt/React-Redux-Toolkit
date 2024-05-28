const bcrypt = require("bcryptjs");
const User = require("../models/profile");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



const userLogin = async (req,res) => {

try {

  const {username,password}=req.body
  console.log('my body ',req.body)

  const user = await User.findOne({username:username})
  const hashedPassword=bcrypt.compare(password, user.password)
if(hashedPassword){
  res.status(200).json(user)
}else{
   res.status(404).json({error: 'saleel is a good boy '})
}


 

  
} catch (error) {
  
}

};

const listUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  listUser,
  userLogin
};
