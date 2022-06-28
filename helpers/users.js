const jwt = require('jsonwebtoken');
const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheyCanGenerateTokens";

const calculateToken = (userEmail = "", userId = "") => {
    return jwt.sign({email: userEmail, user_id: userId}, PRIVATE_KEY);
}

const decodeToken = (token) => {
    const decode = jwt.decode(token, {complete: true});
    return decode;
}

module.exports = { calculateToken, decodeToken };