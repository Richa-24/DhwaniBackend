const mongoose = require("mongoose");

const { Schema } = mongoose;

const State = new Schema({
    state: {
        type: String,
        required: true,
        min: 3
    }
});

module.exports = mongoose.model("state", State);
