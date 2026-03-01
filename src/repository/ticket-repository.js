const {Op} = require('sequelize')
const {NotificationTicket}=require('../models/index');
class TicketRepository{
 async getAllTickets(){
    try{
const tickets = await NotificationTicket.findAll();
return tickets;
    }catch(err){
        throw err;
    }
 }
 async createTickets(data){
    try{
const tickets = await  NotificationTicket.create(data);
return tickets;
    }catch(err){
        throw err;
    }
 }
 async get(filter){
    try{
 const tickets= await NotificationTicket.findAll({
    where:{
        status:filter.status,
        notificationTime:{
    [Op.lte]:new Date()
        }
    }
 });
 return tickets;
    }catch(err){
        throw err;
    }
 }
}
module.exports = TicketRepository;