const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: {
        type: String,
        default: () => Math.random().toString(36).substr(2,9)
    },
    username: String,
    password: String,
    fullName: String,
})

module.exports = mongoose.model("Users", userSchema);