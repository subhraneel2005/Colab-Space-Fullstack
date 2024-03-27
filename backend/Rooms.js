const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    roomId: {
        type: String,
        default: () => Math.random().toString(36).substr(2,9)
    },
    roomName: String,
    
});

module.exports = mongoose.model("Rooms", roomSchema);