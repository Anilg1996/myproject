const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {

    let token = req.headers["x-auth-token"]

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });

    console.log(token);

    
    let decodedToken = jwt.verify(token, "anil");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    next()
}


const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}
module.exports.authenticate = authenticate