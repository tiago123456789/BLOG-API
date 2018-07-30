import ArticleDAO from "./../dao/ArticleDAO";
import ArticleBO from "./../bo/ArticleBO";
import ArticleEndpoint from "./../endpoint/ArticleEndpoint";

const articleDAO = new ArticleDAO();
const articleBO = new ArticleBO(articleDAO);
const articleEndpoint = new ArticleEndpoint(articleBO);

export default (router) => {

    router.get("", articleEndpoint.findAll);
    router.get("/:id", articleEndpoint.findBydId);
    router.post("", articleEndpoint.save);
    router.delete("/:id", articleEndpoint.delete);
    router.put("/:id", articleEndpoint.update);
    router.post("/:id/comments", articleEndpoint.addComment);
    return router;
}