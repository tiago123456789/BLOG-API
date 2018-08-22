import TokenService from "./TokenService";
import AuthorBO from "./../bo/AuthorBO";

export default class AuthService {

    static DATA_INVALID = "Dados informados são inválidos!";

    constructor() {
        this._authorBo = new AuthorBO();
        this._tokenService = new TokenService();
    }

    async temAcesso(request, response, next) {
        try {
            const accessToken = this._tokenService.getAccessToken(request);
            const eUmTokenValido = await this._tokenService.isValid(token);
            if (!eUmTokenValido) {
                return next(new SecurityException("Token invalid!"));
            }
            return next();    
        } catch(e) {
            next(e);
        }
        
    }

    async login(credenciais) {
        const emailAutenticacao = credenciais.email;
        const senha = credenciais.senha;

        if (!emailAutenticacao || !password) {
            throw new NegotiationException("Deve ser informado email é senha.")
        }

        const pessoa = await this._authorBo.findByEmail(emailAutenticacao);

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

    async loginByRefreshToken(refreshToken) {
        const refreshTokenEValid = await this._tokenService.isValid(refreshToken);
        
        if (!refreshTokenEValid) {
            throw new SecurityException("Datas invalids!")
        }

        const payloadToken = await this._tokenService.decode(refreshToken);
        const author = await this._authorBo.findByEmail(payloadToken.email);

        if (author) {
            throw new SecurityException("Datas invalids!")
        }

        const { email, name, id } = author;

        return {
            ...this._getAccessERefreshToken({ email, name, id}),
            id, 
            name
        }
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