
const ticketController = require('../controllers/ticketController');

const routes=(app)=>{
    app.post("/crm/api/v1/tickets/",ticketController.createTicket);
}
module.exports=routes