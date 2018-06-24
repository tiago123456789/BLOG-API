import AuthorDAO from "./../dao/AuthorDAO";
import AuthorBO from "./../bo/AuthorBO";
import AuthorEndpoint from "./../endpoint/AuthorEndpoint";

const authorDAO = new AuthorDAO();
const authorBO = new AuthorBO(authorDAO);
const authorEndpoint = new AuthorEndpoint(authorBO);

export default (router) => {

    router.get("", authorEndpoint.findAll);
    router.get("/:id", authorEndpoint.findById);
    router.post("", authorEndpoint.save);
    router.delete("/:id", authorEndpoint.delete);
    router.put("/:id", authorEndpoint.update);
    
    return router;
}