const mongoose = require("mongoose");

const { Schema } = mongoose;

const State = new Schema({
    name: {
        type: String,
        required: true,
        min: 3
    }
});

module.exports = mongoose.model("state", State);
