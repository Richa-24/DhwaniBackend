const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
    email: {
        type: String,
        required: true,
        min: 6,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    }
});

module.exports = mongoose.model("user", User);
