const User = require("../Model/user");
const Joi = require('joi')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");


const loginValidator = data => {
    const schema = Joi.object({
        email: Joi.string().required().min(2).max(255).email(),
        password: Joi.string().required().min(6).max(255)
    })

    return schema.validate(data)
}

const userController = async (req, res) => {
    const validationError = loginValidator(req.body)
    if (validationError.error) return res.json({ message: validationError.error.details[0].message })

    const { email, password } = req.body
    const encryptedPassword = await bcrypt.hash(
        password,
        await bcrypt.genSalt(10)
    );
    const check = { email: email }
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            const newUser = await new User({
                email,
                password: encryptedPassword,
            });
            await newUser.save();

            res.json({
                message: `${email} registered Successfully`
            });
        }
        else {
            const validatePassword = await bcrypt.compare(password, user.password)
            const authToken = jwt.sign(check, process.env.SECRET_KEY_TO_ACCESS, { expiresIn: '20s' });
            if (validatePassword) {
                res.json({
                    message: `${email} logged-in successfully`,
                    user,
                    authToken
                })
                res.cookie('jwt', authToken, { httpOnly: true, maxAge: maxAge * 1000 })
            }
            else return res.status(400).json({ message: "Wrong password!" })
        }
    } catch (err) {
        res.status(400).json({ error_message: err.message })
    }
}

const logout = (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 1 })

        res.json({
            message: "user logged out successfully"
        })
    }
    catch (err) {
        res.status(400).json({ error_message: err.message })
    }
}

module.exports = {
    userController, logout
};