const User = require('../models/User');

const handleErrors = (err) => {
    console.log("⛔⛔⛔⛔", err.message);
    console.log("🔥🔥🔥🔥", err.code);

    let errors = { email: '', password: '' };

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    if (err.code === 11000) {
        return {
            email: 'That email is already registered'
        };
    }

    return errors;
}
const signup_get = (req, res) => {
    res.render('signup');
}
const signup_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({
            errors
        });
    }
}
const login_get = (req, res) => {
    res.render('login');
}
const login_post = (req, res) => {
    res.json(req.body);
}

module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post
}
