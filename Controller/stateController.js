const State = require("../Model/state");

const addState = async (req, res) => {
    try {
        const { state } = req.body
        const newDistrict = await new State({ state })
        newDistrict.save()

        res.json({
            message: `${state} added successfully`
        });
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getState = (req, res) => {
    State.find().then(items => res.json(items)).catch(err => res.status(400).json({ error: "error occurred" }))
}

module.exports = {
    addState, getState
};
