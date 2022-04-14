const mongoose = require("mongoose");

const DB = "mongodb+srv://saloni:ahjG5WIhwHPFLlGH@cluster0.x1dog.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=>console.log(error.message));