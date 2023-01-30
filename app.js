const express=require('express');
const mongoose = require("mongoose");
const userRoutes=require('./routes/user')


const app=express();


app.use(userRoutes);

const PORT=process.env.PORT || 5000;
const MONGO_DB_CONNECTION_STRING = `mongodb+srv://661370:661370@cluster0.8i4ns.mongodb.net/angular2023DB?retryWrites=true&w=majority`;

app.listen(PORT,()=>{
    console.log('u r connected to ' + PORT);

    mongoose
    .connect(MONGO_DB_CONNECTION_STRING)
    .then(() => {
      console.log("connected to db " + PORT);
    })
    .catch((err) => {
      console.log(err);
    });
})