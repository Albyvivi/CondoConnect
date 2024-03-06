const jwt = require('jsonwebtoken');

const secret = process.env.ApiSecretKey;

const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            throw new Error("Authorization in header not found");
        }
        const token = authorizationHeader.split(" ")[1];
        const payload = jwt.verify(token, secret);
        const expirationDate = new Date(payload.exp * 1000);
        if (new Date() > expirationDate) {
            throw new Error("Token Expired");
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth Failed " + error });
    }
};

module.exports = authMiddleware;
