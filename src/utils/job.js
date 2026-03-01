
const emailService= require('../services/emailService');
const cron = require('node-cron');
const setupJobs = ()=>{
    cron.schedule('*/2 * * * *',async()=>{
const response = await emailService.fetchPendingEmails();
console.log(response);
       })  
}
module.exports=setupJobs;