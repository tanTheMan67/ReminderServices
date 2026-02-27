const express = require('express');
const app =express();
const {PORT}=require('./config/serverconfig')
const startAndSetupServer = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
app.listen(PORT,()=>{
    console.log("app is listening on port "+PORT);
})
}
startAndSetupServer(); 