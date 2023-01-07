const authservice=require('../services/authservices')

var jwt=require('jsonwebtoken')
const user = require('../models/user')

const signin=async(req,res)=>{
  
    const response=await authservice.signin(req.body)
    return res.json({
        message:"Sucessfully Signin ",
        success:true,
        code:200,
        data:response
    })
}

const login=async(req,res)=>{

    const response=await authservice.verifyemail(req.body.email);
    if(!response){
        return res.json({
            message:"email is not correct",
            code:400,
            success:true,
            data:[]
        })
    }
    else if(response.userStatus !='APPROVED'){
        return res.json({
            message:`Can't allow login as user is in statuts : [ ${response.userStatus}]`,
            code:400,
            success:true,
            data:[]
        })
    }
    else{
        try{
            const correctpassword=await authservice.verifypassword(req.body.password,response.password);
        if(correctpassword){
            var token=jwt.sign({email:response.email,username:response.username,password:response.password},"amansatyadubey",{
                expiresIn : 7200
            });
            return res.json({
                message:"password is correct so you are  signed up",
                code:200,
                success:true,
                data:response,
                token:token
            });
        }
        else{
            return res.json({
            message:"password is not correct",
            code:400,
            success:true,
            data:[]
        })

        }
        
        
    }catch(err){
        console.log(err);
    }

}
        
    
   
}

module.exports={signin,login}