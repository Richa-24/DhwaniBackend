const mongoose = require("mongoose");

const { Schema } = mongoose;

const Child = new Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    sex: {
        type: String,
        required: true,
        min: 3,
    },
    dob: {
        type: String,
        required: true,
    },
    father: {
        type: String,
        required: true,
        min: 3,
    },
    mother: {
        type: String,
        required: true,
        min: 3
    },
    state: {
        type: String,
        required: true,
        min: 3,
    },
    district: {
        type: String,
        required: true,
        min: 3
    }
});

module.exports = mongoose.model("child", Child);
