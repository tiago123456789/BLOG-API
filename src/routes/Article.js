import ArticleDAO from "./../dao/ArticleDAO";
import ArticleBO from "./../bo/ArticleBO";
import ArticleEndpoint from "./../endpoint/ArticleEndpoint";
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const articleDAO = new ArticleDAO();
const articleBO = new ArticleBO(articleDAO);
const articleEndpoint = new ArticleEndpoint(articleBO);

export default (router) => {

    router.get("", articleEndpoint.findAll);
    router.get("/:id", invalidIdMongodb, articleEndpoint.findBydId);
    router.post("", articleEndpoint.save);
    router.delete("/:id", invalidIdMongodb, articleEndpoint.delete);
    router.put("/:id", invalidIdMongodb, articleEndpoint.update);
    router.post("/:id/comments", invalidIdMongodb, articleEndpoint.addComment);
    return router;
}