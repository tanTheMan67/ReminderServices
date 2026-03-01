const TicketService = require('../services/emailService');
const create = async(req,res)=>{
    try{
        console.log(req.body);
   const data = await TicketService.createNotification(req.body);
    res.status(200).send(data);   
}catch(err){
  res.status(400).send(err.message);
    }
}
module.exports = {
    create
}