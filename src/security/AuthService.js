import TokenService from "./TokenService";
import AuthorBO from "./../bo/AuthorBO";
import Encoder from "./../lib/Encoder";

import DatasInvalidException from "./../exception/DatasInvalidException";
import DatasInvalidException from "./../exception/DatasInvalidException";
import SecurityException from "./../exception/SecurityException";
import ExceptionMessage from "./../exception/ExceptionMessage";


import TokenBuilder from "./TokenBuilder";
import Token from "./Token";

export default class AuthService {

    constructor(authorBO) {
        this._authorBo = authorBO || new AuthorBO();
        this._tokenService = new TokenService();
        this.temAcesso = this.temAcesso.bind(this);
    }

    async temAcesso(request, response, next) {
        try {
            const accessToken = this._tokenService.getAccessToken(request);
            if (accessToken.length == 0) {
                return response.status(403).json({ msg: "Need to inform token!"})
            }

            const eUmTokenValido = await this._tokenService.isValid(accessToken);
            
            if (!eUmTokenValido) {
                return next(new SecurityException(ExceptionMessage.DATA_INVALID));
            }
            return next();    
        } catch(e) {
            next(e);
        }
        
    }

    async login(credenciais) {
        const emailAutenticacao = credenciais.email;
        const password = credenciais.password;

        if (!emailAutenticacao || !password) {
            throw new DatasInvalidException();
        }

        const pessoa = await this._authorBo.findByEmail(emailAutenticacao);
        if (!pessoa) {
            throw new SecurityException(AuthService.DATA_INVALID, 401);
        }

        const senhaEValida = await Encoder.isEqual(password, pessoa.password);
        if (!senhaEValida) {
            throw new SecurityException(AuthService.DATA_INVALID, 401);
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
            throw new SecurityException(ExceptionMessage.DATA_INVALID, 403);
        }

        const payloadToken = await this._tokenService.decode(refreshToken);
        const author = await this._authorBo.findByEmail(payloadToken.email);

        if (!author) {
            throw new SecurityException(ExceptionMessage.DATA_INVALID, 401);
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