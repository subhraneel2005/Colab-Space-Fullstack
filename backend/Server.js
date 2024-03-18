const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./Users");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

const port = 3000 || process.env.port;

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/ColabSpaceDB");

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: "jasghcksadjhcl",
    resave: false,
    saveUninitialized: false, 
}))

//register login and logout functions

const register = async(req,res) => {
    const { username, password, fullName} = req.body;

    try {
        const userExists = userModel.findOne({username});
        if(userExists){
            res.status(400).json({message: "Username already exists"});
        }
        else{
            const newUser = new userModel ({username,password, fullName});
            await newUser.save();
            res.status(200).json({message: "Registration successfull"});
        }
    } catch (error) {
        res.status(400).json({message: "Internal server error"});
    }
}

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})