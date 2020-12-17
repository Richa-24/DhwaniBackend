const District = require("../Model/district");

const addDistrict = (req, res) => {
    const { name } = req.body
    const newDistrict = new District({ name })

    newDistrict.save()
        .then((data) => res.json(data)).catch(err => console.log("error" + err))
}

const getDistrict = (req, res) => {
    District.find().then(items => res.json(items)).catch(err => res.status(400).json({ error: "error occurred" }))
}

module.exports = {
    addDistrict, getDistrict
};
