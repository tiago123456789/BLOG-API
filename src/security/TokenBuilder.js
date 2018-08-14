import jwt from "jsonwebtoken";

export default class TokenBuiler {

    constructor(token) {
        this._token = token;
    }

    build() {
        return jwt.sign(
            this._token.getPayload(),
            this.token.getSecret(),
            { expiresIn: this._token.getTimeExpired() }
        );
    }
}