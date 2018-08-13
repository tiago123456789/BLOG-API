import CategoryDAO from "./../dao/CategoryDAO";
import CategoryBO from "./../bo/CategoryBO";
import CategoryEndpoint from "./../endpoint/CategoryEndpoint";
import { invalidIdMongodb } from "../middleware/InvalidIdMongodb";

const categoryDAO = new CategoryDAO();
const categoryBO = new CategoryBO(categoryDAO);
const categoryEndpoint = new CategoryEndpoint(categoryBO);

export default (router) => {

    router.get("", categoryEndpoint.findAll);
    router.get("/:id", invalidIdMongodb, categoryEndpoint.findById);
    router.post("", categoryEndpoint.save);
    router.delete("/:id", invalidIdMongodb, categoryEndpoint.delete);
    router.put("/:id", invalidIdMongodb, categoryEndpoint.update);
    
    return router;
}