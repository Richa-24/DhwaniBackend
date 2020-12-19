const Child = require("../Model/child");

const addChild = async (req, res) => {
    try {
        const { name, sex, dob, father, mother, state, district } = req.body
        const newChild = await new Child({ name, sex, dob, father, mother, state, district })
        await newChild.save()

        res.json({
            message: `${name} added successfully`
        });
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getChild = (req, res) => {
    Child.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    addChild, getChild
};
