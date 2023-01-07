
const {user}=require('../models/index')
const objectConvertor = require("../utils/objectConverter");
const userservice=require('../services/userservice')

const findAlluser = async (req, res) => {
    const getalluser=await userservice.findAlluser()
    return res.json({
        message:"Sucessfully get the all the user ",
        success:true,
        code:200,
        data:getalluser
    })
}



const findById=async(req,res)=>{
    const result=await userservice.findById(req.params.id)
    return res.json({
        message:"Sucessfully get the user through its id ",
        success:true,
        code:200,
        data:result
    })
}
const updateuser = async(req, res) =>{
    const response = await userservice.updateuser(req.params.id, req.body);
    return res.json({
        message: 'Successfully updated the user',
        success: true,
        code: 201,
        data:response
    });
}
module.exports={findById,findAlluser,updateuser}
