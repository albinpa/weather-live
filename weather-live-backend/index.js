const express = require('express');
const app = express();
var cors = require('cors');
const connection = require('./connection');

const userRoutes= require('./router/user');
const authRoutes= require('./router/auth');
const weatherRoutes = require('./router/weather');



app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/',weatherRoutes)
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);


module.exports = app;