import TokenBuiler from "./TokenBuilder";
import Token from "./Token";
import AuthorBO from "../bo/AuthorBO";
import NegotiationException from "../exception/NegotiationException";
import Encoder from "../lib/Encoder";

export default class AutenticacaoService {

    static DATA_INVALID = "Dados informados são inválidos!";

    constructor() {
        this._authorBo = new AuthorBO();
    }

    async login(credenciais) {
        const { email, password } = credenciais;

        if (!email || !password) {
            throw new NegotiationException("Deve ser informado email é senha.")
        }

        const pessoa = await this._authorBo.findByEmail(email);

        if (!pessoa) {
            throw new SecurityException(AutenticacaoService.DATA_INVALID, 403);
        }

        const senhaEncriptada = Encoder.getHash(password);
        const senhaEValida = pessoa.password == senhaEncriptada;
        
        if (!senhaEValida) {
            throw new SecurityException(AutenticacaoService.DATA_INVALID, 403);
        }

        const { email, name, id } = pessoa;

        return {
            ...this._getAccessERefreshToken({ email, name, id}),
            id, 
            name
        }

    }

    loginByRefreshToken(refreshToken) {

    }

    _getAccessERefreshToken(dados) {
        const accessToken = new Token(Token.TYPE.ACCESS);
        const refreshToken = new Token(Token.TYPE.REFRESH);
        
        const chaves = Object.keys(dados);
        chaves.forEach(chave => {
            accessToken.addValuePayload(chave, dados[chave]);
            refreshToken.addValuePayload(chave, dados[chave]);
        });

        return {
            accessToken: new TokenBuilder(accessToken).build(),
            refreshToken: new TokenBuilder(refreshToken).build()            
        }
    }
}