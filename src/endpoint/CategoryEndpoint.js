export default class CategoryEndpoint {

    constructor(bo) {
        this._bo = bo;
        this.save = this.save.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
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
            console.log(e);
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