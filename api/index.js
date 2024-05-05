import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import User from './models/User';
var jwt = require('jsonwebtoken');
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL)
const app = express();

const jwtSecret = process.env.JWT_SECRET;
app.get('/test', (req,res) => {
    res.json('test ok')

})

app.post('/register', async (req, res) => {
    const {username, password} = req.body; 
    const createdUser = await User.create({username, password});
    jwt.sign({userId:createdUser,_id}, jwtSecret, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).status(201).json('ok');
    });
})


app.listen(4000);