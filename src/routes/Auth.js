import AuthEndpoint from "./../endpoint/AuthEndpoint";
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const authEndpoint = new AuthEndpoint();

export default (router) => {

    router.post("/login", authEndpoint.login);
    router.post("/login/:refreshToken/refresh", authEndpoint.loginByRefreshToken);
    return router;
}