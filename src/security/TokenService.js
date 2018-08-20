import jwt from "jsonwebtoken";

export default class TokenService {
    
    decode(token) {
        if (this._isJwtValid(token)) {
            throw new SecurityException("Token invalid!");
        }
        return jwt.decode(token);
    }

    isValid() {
        return new Promise((resolve, reject) => {
            if (this._isJwtValid(token)) {
                reject(new SecurityException("Token invalid!"));
            }

            jwt.verify(token, (err, jwtDecoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(jwtDecoded);
                }
            });
        });
    }

    _isJwtValid(token) {
        const expressionValidTokenJwt = /^([a-z0-9])+\.([a-z0-9])+\.([a-z0-9])+$/;
        const isJwt = expressionValidTokenJwt.test(token);
        return (token == null || isJwt);
    }
}