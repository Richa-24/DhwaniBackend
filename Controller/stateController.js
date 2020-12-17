const State = require("../Model/state");

const addState = (req, res) => {
    const { name } = req.body
    const newState = new State({ name })

    newState.save()
        .then((data) => res.json(data)).catch(err => console.log("error" + err))
}

const getState = (req, res) => {
    State.find().then(items => res.json(items)).catch(err => res.status(400).json({ error: "error occurred" }))
}

module.exports = {
    addState, getState
};
