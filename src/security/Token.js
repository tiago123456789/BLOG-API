export default class Token {

    static TYPE = {
        REFRESH: "REFRESH",
        ACCESS: "ACCESS"
    }

    constructor(typeToken = Token.TYPE.ACCESS) {
        this._payload = {};
        this._secret = process.env.TOKEN_SECRET;
        this._type = typeToken;
        this.addValuePayload("type", typeToken);
    }

    addValuePayload(key, value) {
        this._payload[key] = value;
        return this;
    }

    getPayload() {
        return this._payload;
    }

    getSecret() {
        return Buffer.from(this._secret).toString("base64")
    }

    getTimeExpired() {
        if (this._type == Token.TYPE.ACCESS) {
            return process.env.ACCESS_TOKEN_TIME_EXPIRED
        } else {
            return process.env.REFRESH_TOKEN_TIME_EXPIRED;
        }
    }
}