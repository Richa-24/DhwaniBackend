const District = require("../Model/district");

const addDistrict = async (req, res) => {
    try {
        const { state, district } = req.body
        const newDistrict = await new District({ state, district })
        newDistrict.save()

        res.json({
            message: `${district} added successfully`
        });
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getDistrict = (req, res) => {
    District.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    addDistrict, getDistrict
};
