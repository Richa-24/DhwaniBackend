const Child = require("../Model/child");

const addChild = (req, res) => {
    console.log(req)
    const { name, sex, dob, father, mother, state, district } = req.body
    const newChild = new Child({ name, sex, dob, father, mother, state, district })

    newChild.save()
        .then((data) => res.json(data)).catch(err => console.log("error" + err))
}

const getChild = (req, res) => {
    Child.find().then(items => res.json(items)).catch(err => res.status(400).json({ error: "error occurred" }))
}

module.exports = {
    addChild, getChild
};
