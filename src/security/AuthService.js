import TokenService from "./TokenService";

export default class AuthService {

    static DATA_INVALID = "Dados informados são inválidos!";

    constructor() {
        this._authorBo = new AuthorBO();
        this._tokenService = new TokenService();
    }

    async temAcesso(token) {
        const eUmTokenValido = await this._tokenService.isValid(token);
        return eUmTokenValido;
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