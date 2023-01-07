const {user} = require("../models/index")

const findAlluser=async()=>{
    const result=await user.findAll()
    return result
}

const findById=async(data)=>{
    const result=await user.findAll({
        where:{
            id:data
        }
    })
    return result
}
const updateuser =  async(id, data) =>{
    const response = await user.update(
        { 
            name: data.name,
            
            userType: data.userType,
            userStatus: data.userStatus
        }, 
        {
            where: {
                id: id
            }
        });
    return response;
}
module.exports={
    findById,
    updateuser,
    findAlluser
}