const signup_get = (req, res) => {
    res.render('signup');
}
const signup_post = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.json(req.body);
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
