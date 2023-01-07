const {user,Ticket}=require('../models/index')
const constants = require("../utils/constants");
const objectConvertor = require("../utils/objectConverter");

exports.createTicket = async (req, res) => {

    const ticketObject = {
        title: req.body.title,
        ticketPriority: req.body.ticketPriority,
        description: req.body.description,
        status: req.body.status,
        reporter: req.userId //this will be retrieved from the middleware
    }

    /**
     * Logic to find an Engineer in the Approved state 
     */
    const engineer = await user.findOne({
        userType: constants.userTypes.engineer,
        userStatus: constants.userStatus.approved
    });
    ticketObject.assignee = engineer.userId;

    try {
        const ticket = await Ticket.create(ticketObject);

        if (ticket) {
            //Updating the customer
            const users = await user.findOne({
                userId: req.userId
            });
            users.ticketsCreated.push(ticket.id);
            await users.save();

            //Updating the Engineer
            engineer.ticketsAssigned.push(ticket.id);
            await engineer.save();


            res.status(201).send(objectConvertor.ticketResponse(ticket));
        }
    } catch (err) {
        console.log("Some error happened while creating ticket", err.message);
        res.status(500).send({
            message: "Some internal server error"
        }
        )
    }

};