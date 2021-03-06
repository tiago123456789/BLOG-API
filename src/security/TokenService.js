import jwt from "jsonwebtoken";
import { CONSTANTES } from "../config/Constantes";
import Token from "./Token";

export default class TokenService {

    constructor() {
        this._token = new Token();
        this.isValid = this.isValid.bind(this);
    }
    
    getAccessToken(request) {
        let token = request.get(CONSTANTES.PARAM_AUTHORIZATION) || "";
        token = token.replace(`${CONSTANTES.PARAM_PREFIX_TOKEN} `, "");
        return token;
    }

    decode(token) {
        if (this._isJwtValid(token)) {
            throw new SecurityException("Token invalid!");
        }
        return jwt.decode(token);
    }

    isValid(token) {
        return new Promise((resolve, reject) => {
            if (this._isJwtValid(token)) {
                reject(new SecurityException("Token invalid!"));
            }
            
            jwt.verify(token, this._token.getSecret(), (err, jwtDecoded) => {
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