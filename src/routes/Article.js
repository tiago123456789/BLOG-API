import ArticleDAO from "./../dao/ArticleDAO";
import ArticleBO from "./../bo/ArticleBO";
import ArticleEndpoint from "./../endpoint/ArticleEndpoint";
import AuthService from "./../security/AuthService"
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const articleDAO = new ArticleDAO();
const articleBO = new ArticleBO(articleDAO, null);
const articleEndpoint = new ArticleEndpoint(articleBO);
const authService = new AuthService();

export default (router) => {

    router.get("", articleEndpoint.findAll);
    router.get("/:id", invalidIdMongodb, articleEndpoint.findById);
    router.post("", authService.temAcesso, articleEndpoint.save);
    router.delete("/:id", authService.temAcesso, invalidIdMongodb, articleEndpoint.delete);
    router.put("/:id", authService.temAcesso, invalidIdMongodb, articleEndpoint.update);
    router.post("/:id/comments", authService.temAcesso, invalidIdMongodb, articleEndpoint.addComment);
    return router;
}