const nodemailer=require('nodemailer');
const {userId,password}=require('./serverconfig');
console.log(userId);
console.log(password);
const sender =nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:userId,
        pass:password,
    }
});
module.exports=sender;