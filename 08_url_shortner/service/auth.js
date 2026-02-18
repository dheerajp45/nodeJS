// const sessionIdToUsermap = new Map();
const jwt = require('jsonwebtoken');
const secret="dheerajp45"

function setUser(user){
    user ={
        _id : user._id,
        email:user.email,
    }
    return jwt.sign(user,secret)
}

function  getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};