const sender = require('../config/emailConfig');
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
module.exports = {
    sendBasicEmail
}