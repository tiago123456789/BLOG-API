export default class CategoryEndpoint {

    constructor(bo) {
        this._bo = bo;
    }

    async save(request, response, next) {
        try {
            const newCategory = request.body;
            await this._bo.save(newCategory);
            response.sendStatus(201);
        } catch (e) {
            next(e);
        }
    }

    async findAll(request, response, next) {
        try {
            const categories = await this._bo.findAll();
            response.status(200).json(categories);
        } catch (e) {
            next(e);
        }
    }

    async findById(request, response, next) {
        try {
            const id = request.params.id;
            const category = await this._bo.findById(id);
            response.status(200).json(category);
        } catch (e) {
            next(e);
        }
    }

    async delete(request, response, next) {
        try {
            const id = request.params.id;
            await this._bo.delete(id);
            response.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }

    async update(request, response, next) {
        try {
            const id = request.params.id;
            const categoryModified = request.body;
            await this._bo.update(id, categoryModified);
            response.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }
}