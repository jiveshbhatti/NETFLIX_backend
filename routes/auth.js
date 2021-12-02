const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")



//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    email: req.body.email,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    !user && res.status(401).json("Wrong Password or username!");
    console.log(user.password)
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password && res.status(401).json("Wrong Password or username!");

    const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin},
      
      process.env.SECRET_KEY, {expiresIn: '500d'})

      const {password, ...info} = user._doc;

      console.log(accessToken)
      console.log(info)
      console.log(password, 'decrypted')

    res.status(200).json({...info, accessToken});
  } catch (err) {
    res.status(500).json(err);
    console.log('error in routes/auth/login function')
  }
});

module.exports = router;
