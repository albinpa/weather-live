const express = require('express');
const router = express.Router();
var db = require('../connection');
const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');



router.post('/', async (req, res) => {
    console.log(req.body)
    let userData = req.body
   try {
       const{error } = validate(req.body);
       console.log(req.body)
       console.log(error)
       if (error) {
        return res.status(400).send({ message: error.details[0].message});
       }
           
       const user = await db.get().collection('user').findOne({ email: req.body.email })
       if (user) 
           return res.status(409).send({message:"Üser with given email already exists..."})
       console.log("hai")
      
       let password = req.body.password
       password = await bcrypt.hash(password, 10);
       let userObj = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: password,
        role: "user",
        status: "true"
    }

    console.log(userObj)
    
       db.get().collection('user').insertOne(userObj);
       res.status(201).send({message: "User created successfully"})
   } catch (error) {
       console.log(error)
       res.status(500).send({message: "Internal Server Error"})
   }
});

module.exports = router;