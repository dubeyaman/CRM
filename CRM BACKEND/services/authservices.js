const {user}=require('../models/index')
const constants=require('../utils/constants')
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')

const signin=async(data)=>{
    
    var userStatus = data.userSatus;
    if(!data.userSatus){
       if(!data.userType || data.userType==constants.userTypes.customer){
        userStatus = constants.userStatus.approved;
       }else{
        userStatus = constants.userStatus.pending;  
       }
    }

    var salt = bcrypt.genSaltSync(10);
    var hashpassword = bcrypt.hashSync(data.password, salt);
    

    const response=await user.create({
        name: data.name,
        email: data.email,
        password: hashpassword,
        userId: data.userId,
        userType: data.userType,
        userStatus:userStatus
    })
    return response
}

const verifyemail=async(data)=>{
    const response=await user.findOne({
        where:{
            email:data
        }
    })
    return response;

}
const verifypassword=async(password,hashpassword)=>{
    
        const response= await bcrypt.compareSync(password,hashpassword);
        return response;

    }
const verifytoken=async(token)=>{
    try{
        const response=jwt.verify(token,"amansatyadubey");
    return response;
}
catch(err){
    console.log(err);
}

}

module.exports={signin,verifyemail,verifypassword,verifytoken}