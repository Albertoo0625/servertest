const express=require("express");
const http=require('http')
const app=express();
const port=4500;
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use('/newuser',require('./routes/newuser'));



// const Server=http.createServer();

// Server.listen(port,()=>{
//     console.log(`server listening on port ${port}`)
// });

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})