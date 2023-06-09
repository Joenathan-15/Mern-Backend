const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
const errorHandler = require("./middleware/errorHandler");
const app = express()
const port = process.env.PORT || 3000

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DATABASE CONNECT: ", connect.connection.host, connect.connection.name)
    }catch (err) {
        console.log(err)
        process.exit(1)
    }
}

app.all('/', (req,res) => {
    res.json({"message":"Welcome to Page"})
})
app.use(express.json());
app.use('/api/users', require("./routes/UsersRoutes"));
app.use('/api/blog', require("./routes/BlogRoutes"));
app.use(errorHandler);



connectDb().then(() => {
    app.listen(process.env.PORT || 3000)
})
