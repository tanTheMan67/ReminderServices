const cron = require('node-cron');
const setupJobs = ()=>{
    cron.schedule('*/5   * * * *',()=>{
        console.log('running task every 2 min');
       })  
}
module.exports=setupJobs;