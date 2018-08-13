import AuthorDAO from "./../dao/AuthorDAO";
import AuthorBO from "./../bo/AuthorBO";
import AuthorEndpoint from "./../endpoint/AuthorEndpoint";
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const authorDAO = new AuthorDAO();
const authorBO = new AuthorBO(authorDAO);
const authorEndpoint = new AuthorEndpoint(authorBO);

export default (router) => {

    router.get("", authorEndpoint.findAll);
    router.get("/:id", invalidIdMongodb, authorEndpoint.findById);
    router.post("", authorEndpoint.save);
    router.delete("/:id", invalidIdMongodb, authorEndpoint.delete);
    router.put("/:id", invalidIdMongodb, authorEndpoint.update);
    
    return router;
}