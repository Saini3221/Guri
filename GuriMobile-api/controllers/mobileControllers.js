
const Mobile = require("../model/mobileModel")

const getAllMobile = async (req, res) => {
    let mobileData = await Mobile.find()
    res.send(mobileData);

}




const getSingleMobile = async (req, res) => {
    let id = req.headers.id;
    // console.log(id)
    let mobileData = await Mobile.findById(id)
    res.send(mobileData)

}





const createMobile = async (req, res) => {
    let data = req.body;
    // console.log(data)
    let newPhone = await new Mobile(data).save();
    res.send(newPhone);
    // let newdata =await Mobile.create(data)

}
const upDateMobile = async (req,res)=> {
    let id = req.headers.id;
    let data =req.body;
    let mobileData = await Mobile.findByIdAndUpdate(id,data)
    res.send(mobileData)
}

module.exports = { getAllMobile, createMobile, getSingleMobile, upDateMobile }