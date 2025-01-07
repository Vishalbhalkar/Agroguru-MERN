// Connection with database 

const dotenv=require("dotenv");
dotenv.config();

const mongoose = require("mongoose")

// const Db = process.env.DB_LINK;
// console.log("DB_LINK:", process.env.DB_LINK);

mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(()=>{
     console.log("Conection has been done successfully with mongoDB Atlas database.");
 })
 .catch((err)=>{
     console.log("unable to connect error is :",err);
 })
 