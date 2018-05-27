import tagDAO from "./../collections/Tag";
export default (router) => {

    router.get("", async (request, response) => {
        const tags = await tagDAO.find({});
        response.json(tags);
    });

    router.post("", async (request, response) => {
        try {
            const newTag = request.body;
            const result = await tagDAO.create(newTag);
            response.json(result);
        } catch (error) {
            response.status(400).json({ error: getErrorsValidation(error)});
        }
    });

    router.delete("/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const tag = await tagDAO.findById(id);

            if (!tag) {
                throw new Error("Not found tag!");
            }

            await tagDAO.deleteOne({ _id: tag.id });
            response.sendStatus(204);
        } catch(error) {
            response.status(404).json({ error: error.message });
        }
    })


    function getErrorsValidation(error) {
        const errorsValidation = error.errors;
        return Object.keys(errorsValidation).map(chave => errorsValidation[chave].message);
    }
    return router;
}