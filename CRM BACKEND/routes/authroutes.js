const authcontroller=require('../controllers/authcontroller')

const routes=(app)=>{

    app.post('/crm/api/v1/signin',authcontroller.signin)

    app.post('/crm/api/v1/login',authcontroller.login)
}
module.exports=routes