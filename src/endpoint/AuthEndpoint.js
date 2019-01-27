import AuthService from "../security/AuthService";

export default class AuthEndpoint {

    constructor() {
        this._authService = new AuthService();
        this.login = this.login.bind(this);
        this.loginByRefreshToken = this.loginByRefreshToken.bind(this);
    }

    async login(request, response, next) {
        try {
            const credenciais = request.body;
            const datasUserAuthenticated = await this._authService.login(credenciais);
            response.status(200).json(datasUserAuthenticated);
        } catch (e) {
            next(e);
        }
    }

    async loginByRefreshToken(request, response, next) {
        try {
            const refreshToken = request.params.refreshToken;
            const datasUserAuthenticated = await this._authService.loginByRefreshToken(refreshToken);
            response.status(200).json(datasUserAuthenticated);
        } catch (e) {
            next(e);
        }
    }
}