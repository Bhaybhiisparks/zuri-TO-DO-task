const express = require ("express");
// const { json } = require("express");
const mongoose = require ("mongoose");

const todoRoute = require('./routes/todoroute')

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;




const dbURI = "mongodb://zuri:zuri@ac-731ksss-shard-00-00.qnul1qs.mongodb.net:27017,ac-731ksss-shard-00-01.qnul1qs.mongodb.net:27017,ac-731ksss-shard-00-02.qnul1qs.mongodb.net:27017/?ssl=true&replicaSet=atlas-as9ob6-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(dbURI).then((result) => {
    app.listen(PORT, () => console.log ("server is listening on port 3000 and successfully connected to database"));
    // console.log('app is listening')
})
.catch((err) =>{
    console.log(err);
})


//routes
app.use('/', todoRoute);
// app.use(todoRoute);




