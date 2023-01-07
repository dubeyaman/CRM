const userController = require('../controllers/usercontroller');

const routes=(app)=>{
    app.get("/crm/api/v1/users/",  userController.findAlluser);
    
    app.get("/crm/api/v1/users/:id",  userController.findById);

    app.put("/crm/api/v1/users/:id", userController.updateuser);

}

module.exports = routes