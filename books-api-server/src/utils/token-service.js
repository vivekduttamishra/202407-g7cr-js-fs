const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


const tokenize = (user) => {
    console.log('tokenizing user',user);
    
    const token = jwt.sign(
        JSON.stringify(user),
        process.env.JWT_SECRET,
    );
    return token;
}

const deTokenize = (token) => {

    return new Promise( (resolve, reject) => {

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err)
                return reject(new InvalidCredentialsError("Invalid Token", { message: err.message }));
            else{
                console.log("in deTokenize", user);
                return resolve(user);
            }
        });
    });
}

module.exports = { tokenize, deTokenize };