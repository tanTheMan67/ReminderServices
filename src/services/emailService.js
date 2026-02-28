const TicketRepository= require('../repository/ticket-repository');
const repo = new TicketRepository();
const sender = require('../config/emailConfig');
const { assign } = require('nodemailer/lib/shared');
const sendBasicEmail = async(from,to,subject,body)=>{
try{
   const response = await sender.sendMail({
    from:from,
    to:to,
    subject:subject,
    text:body
})
}catch(err){
    console.log(err);
}
}
const fetchPendingEmails = async(Timestamps)=>{
    try{
 const response = await repo.getAllTickets();
  return response;
    }catch(err){
        throw err;
    }
}
const createNotification= async(data)=>{
    try{
        const response = await repo.createTickets(data);
   return response;    
    }catch(err){
  throw err;
    }
}
module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
}