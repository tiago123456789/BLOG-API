import Token from "../../../src/security/Token";
import TokenBuilder from "../../../src/security/TokenBuilder";


export default class TokenService {

    static getAccessToken(typeToken, email) {
        const token = new Token(token);
        token.addValuePayload("email", email);
        return new TokenBuilder(token).build();
    }
}