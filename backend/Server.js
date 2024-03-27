const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./Users");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const roomSchema = require("./Rooms");
// cd des   cdcdkdckk

const port = 3000 || process.env.port;

// const rooms = {};

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

//io logic

// io.on("connection", (socket) => {
//     socket.on("createRoom", (roomName) => {
//         rooms[roomName] = socket.id;
//         socket.join(roomName);
//     });

//     socket.on("joinRoom", (roomName) => {
//         const createSocketId = rooms[roomName];
//         if (createSocketId) {
//             io.to(createSocketId).emit("userJoined", socket.id);
//         } else {
//             socket.emit("error", "Room not found");
//         }
//     });

//     socket.on("signal", (data) => {
//         io.to(data.target).emit("signal", {
//             source: socket.id,
//             signal: data.signal,
//         });
//     });

//     socket.on("disconnect", () => {
//         for(const roomId in rooms){
//             if(rooms[roomId] === socket.id){
//                 delete rooms[roomId];
//                 break;
//             }
//         }
//     });
// });

//register login and logout functions

const register = async(req,res) => {
    const { username, password, fullName} = req.body;

    try {
        const userExists = await userModel.findOne({username});
        if(userExists){
            res.status(400).json({message: "Username already exists"});
        }
        else{
            const newUser = new userModel ({username, password, fullName});
            await newUser.save();
            res.status(200).json({message: "Registration successfull"});
        }
    } catch (error) {
        res.status(400).json({message: "Internal server error"});
    }
}

const login = async(req,res) => {

    const {username, password} = req.body;

    try {
        const user = await userModel.findOne({username,password})
        
        if(!user){
            return res.status(404).json({message: "No account found"});
        }
            req.session.user = {
                username : user.username,
                password : user.password,
            }

            res.status(200).json({message: "Login successfull"});

    } catch (error) {
        res.status(404).json({message: "Error logging in"});
    }
}

const logout = (req,res) => {
    req.session.destroy();
    res.json({message: "Logged out successfully"});
}

//Room create, join and leave functions

const createRoom = async(req,res) => {
    const {roomName} = req.body;

    const roomExists =  await roomSchema.findOne({roomName});

    if(roomExists){
        res.json({message: "Roomname is already taken"});
    }
    const newRoom = new roomSchema({roomName});
    await newRoom.save();
    res.json({message: "Room created successfully"});
}

const joinRoom = async(req,res) => {
    const {roomId} = req.body;
    const room  = await roomSchema.findOne({roomId});

    if(!room){
        res.json({message: "No room exists"});
    }

    res,json(room);
}

const roomIDFunc = (req,res) => {
    const roomID = req.params.id
    res.send(roomID);
}


//auth routes

app.post("/register", register);
app.post("/login", login);
app.post("/logout", logout);
app.get('/profile', (req, res) => {
    
    res.json({ message: 'Welcome to your profile' });
});

//room routes

app.post("/createRoom", createRoom);
app.post("/joinRoom", joinRoom);
app.get("/:id", roomIDFunc);

//server started
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})

