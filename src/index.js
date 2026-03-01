const express = require('express');
const app =express();
const jobs= require('./utils/job');
const {PORT}=require('./config/serverconfig');
const { sendBasicEmail } = require('./services/emailService');
const TicketController = require('./controllers/ticket-contoller');
const startAndSetupServer = ()=>{
    app.use(express.json());    
    app.use(express.urlencoded({extended:true}));
    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT,async()=>{
    console.log("app is listening on port "+PORT);
    try{
       // await sendBasicEmail(
       // 'support@gmail.com',
        //'dummyedenhazard7@gmail.com',
        //'regarding refund',
        //'refund initiation started'
      //  );
     
    jobs();
    }catch(err){
  console.log(err.message);
    }
})
}
startAndSetupServer(); 