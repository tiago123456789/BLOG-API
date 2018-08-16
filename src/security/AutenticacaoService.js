import TokenBuiler from "./TokenBuilder";
import Token from "./Token";
import AuthorBO from "../bo/AuthorBO";
import NegotiationException from "../exception/NegotiationException";
import Encoder from "../lib/Encoder";
import { ENOTCONN } from "constants";

export default class AutenticacaoService {

    constructor() {
        this._token = new Token();
        this._tokenBuilder = new TokenBuiler(this._token);
        this._authorBo = new AuthorBO();
    }

    async login(credenciais) {
        const { email, password } = credenciais;

        if (!email || !password) {
            throw new NegotiationException("Deve ser informado email é senha.")
        }

        const pessoa = await this._authorBo.findByEmail(email);

        if (!pessoa) {
            // trigger exception.
        }

        const senhaEncriptada = Encoder.getHash(password);
        const senhaEValida = pessoa.password == senhaEncriptada;
        
        if (!senhaEValida) {
            // trigger exception.
        }



    }

    loginByRefreshToken(refreshToken) {

    }

    _getAccessERefreshToken(dados) {
        const chaves = Object.keys(dados);
        chaves.forEach(chave => this._token.addValuePayload(chave, dados[chave]));
        
    }
}