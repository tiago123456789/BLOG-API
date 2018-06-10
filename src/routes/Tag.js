import TagDAO from "../dao/TagDAO";
import TagBO from "../bo/TagBO";
import TagEndpoint from "../endpoint/TagEndpoint";

const tagDAO = new TagDAO();
const tagBO = new TagBO(tagDAO);
const tagEndpoint = new TagEndpoint(tagBO);

export default (router) => {

    router.get("", tagEndpoint.findAll);
    router.post("", tagEndpoint.save);
    router.delete("/:id", tagEndpoint.delete);
    router.put("/:id", tagEndpoint.update);
    return router;
}