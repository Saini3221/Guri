const User = require("../model/userModel");



const getAlluser = async (req, res) => {
    let userData = await User.find()
    res.send(userData);

}






const createUser = async (req, res) => {
    let data = req.body;

    let newUser = await new User(data).save();
    console.log(newUser)
    res.send(newUser);
};









const loginUser = async (req, res) => {
    let data = req.body;
    // res.send("login")
    // console.log(data)
    
    let existingUser = await User.findOne({ username: data.username });
    if (!existingUser) {
        return res.status(400).send("user not find")
    }
    if (existingUser.password !== data.password) {
        return res.status(400).send("something went wrong")
    }
    // console.log(existingUser)
    res.status(200).send(existingUser);
};



module.exports = { loginUser, createUser, getAlluser }