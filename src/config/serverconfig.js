const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT:process.env.PORT,
    userId:process.env.EMAIL_ID,
    password:process.env.PASSWORD
};