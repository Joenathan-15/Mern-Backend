const express = require('express');
const connectDb = require('./config/DBconnection');
const errorHandler = require('./middleware/errorhandler');
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT

connectDb()
app.use(express.json());
app.use('/api/contacts', require("./routes/ContactsRoutes"));
app.use('/api/users', require("./routes/UsersRoutes"));
app.use(errorHandler);

app.listen(port,() =>{
    console.log(`server running in port ${port}`)
})