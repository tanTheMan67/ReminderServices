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
const tickets = await  NotificationTicket.create();
return tickets;
    }catch(err){
        throw err;
    }
 }
}
module.exports = TicketRepository;