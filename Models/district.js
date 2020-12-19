const mongoose = require("mongoose");

const { Schema } = mongoose;

const District = new Schema({
    state: {
        type: String,
        required: true,
        min: 3
    },
    district: {
        type: String,
        required: true,
        min: 3,
    }
});

module.exports = mongoose.model("district", District);
