import TagDAO from "../dao/TagDAO";
import TagBO from "../bo/TagBO";
import url from "url";
import TagEndpoint from "../endpoint/TagEndpoint";
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const tagDAO = new TagDAO();
const tagBO = new TagBO(tagDAO);
const tagEndpoint = new TagEndpoint(tagBO);

export default (router) => {

    router.get("", tagEndpoint.findAll);
    router.post("", tagEndpoint.save);
    router.delete("/:id", invalidIdMongodb, tagEndpoint.delete);
    router.put("/:id", invalidIdMongodb, tagEndpoint.update);
    return router;
}