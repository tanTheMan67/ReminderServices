const express = require('express');
const app =express();
const cron = require('node-cron');
const {PORT}=require('./config/serverconfig');
const { sendBasicEmail } = require('./services/emailService');
const startAndSetupServer = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
app.listen(PORT,async()=>{
    console.log("app is listening on port "+PORT);
    try{
       // await sendBasicEmail(
       // 'support@gmail.com',
        //'dummyedenhazard7@gmail.com',
        //'regarding refund',
        //'refund initiation started'
      //  );
    //  cron.schedule('*/5 * * * * *',()=>{
     //   console.log('running task every 2 min');
      // })
    console.log("email sent");
    }catch(err){
  console.log(err.message);
    }
})
}
startAndSetupServer(); 