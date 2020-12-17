const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes")

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", userRoutes);

mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (error) => {
        if (error) console.log(`error connecting database : ${error}`);
        else console.log("Database connected");
    }
);

app.listen(8000, () => {
    console.log("Server is running up at port 8000")
})
