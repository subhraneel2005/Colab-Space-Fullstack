const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    fullName: String,
})

module.exports = mongoose.model("Users", userSchema);