const User = require("../Model/user");
const Joi = require('joi')
const bcrypt = require('bcryptjs')

const loginValidator = data => {
    const schema = Joi.object({
        email: Joi.string().required().min(2).max(255).email(),
        password: Joi.string().required().min(6).max(255)
    })

    return schema.validate(data)
}

const loginController = async (req, res) => {
    const validationError = loginValidator(req.body)
    if (validationError.error) return res.json({ message: validationError.error.details[0].message })

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(400).json({ message: "User not exists!" })

        const validatePassword = await bcrypt.compare(password, user.password)

        if (validatePassword) return res.json(user)
        else return res.status(400).json({ message: "Wrong password!" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    loginController
};
