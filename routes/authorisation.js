const authRouter = require('express').Router();
const User = require('../models/user');
const { calculateToken, decodeToken } = require('../helpers/users');

authRouter.post('/checkCredentials', (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email).then((user) => {
        if (!user) {
            console.log("User Authentification : Failure");
            res.status(401).send('Wrong email or password');
        } else {
            User.verifyPassword(password, user.hashedPassword).then((accessGranted) => {
                if (!accessGranted) {
                    console.log("User Authentification : Failure");
                    res.status(401).send('Wrong email or password');
                } else {
                    console.log("User Authentification : Success");
                    res.status(200).json({
                        "firstname" : user.firstname,
                        "lastname" : user.lastname,
                        "city" : user.city,
                        "language" : user.language,
                        "email" : user.email
                    });
                }
            })
        }
    })
});

authRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email).then((user) => {
        if (!user) {
            res.status(401).send('Invalid username or password');
        } else {
            User.verifyPassword(password, user.hashedPassword).then(async (accessGranted) => {
                if (accessGranted) {
                    const token = calculateToken(email, user.id);
                    const decode = await decodeToken(token);
                    console.log('Token : ' + token);
                    console.log(decode);
                    User.update(user.id, { token });
                    res.cookie('user_token', token);
                    res.send();
                } else {
                    res.status(401).send('Invalid username or password');
                }
            })
        }
    })
});

module.exports = authRouter;