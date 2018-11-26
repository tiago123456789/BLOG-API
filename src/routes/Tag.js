import TagDAO from "../dao/TagDAO";
import TagBO from "../bo/TagBO";
import TagEndpoint from "../endpoint/TagEndpoint";
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const tagDAO = new TagDAO();
const tagBO = new TagBO(tagDAO);
const tagEndpoint = new TagEndpoint(tagBO);

export default (router) => {

    router.get("", tagEndpoint.findAll);
    router.get("/:id", tagEndpoint.findById);
    router.post("", tagEndpoint.save);
    router.delete("/:id", invalidIdMongodb, tagEndpoint.delete);
    router.put("/:id", invalidIdMongodb, tagEndpoint.update);
    return router;
}