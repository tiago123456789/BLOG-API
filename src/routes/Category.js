import CategoryDAO from "./../dao/CategoryDAO";
import CategoryBO from "./../bo/CategoryBO";
import CategoryEndpoint from "./../endpoint/CategoryEndpoint";

const categoryDAO = new CategoryDAO();
const categoryBO = new CategoryBO(categoryDAO);
const categoryEndpoint = new CategoryEndpoint(categoryBO);

export default (router) => {

    router.get("", categoryEndpoint.findAll);
    router.get("/:id", categoryEndpoint.findById);
    router.post("", categoryEndpoint.save);
    router.delete("/:id", categoryEndpoint.delete);
    router.put("/:id", categoryEndpoint.update);
    
    return router;
}