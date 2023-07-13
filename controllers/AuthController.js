const User = require('../models/User');

const signup_get = (req, res) => {
    res.render('signup');
}
const signup_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json(error._message);
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
