export default class TagEndpoint {

    constructor(bo) {
        this._tagBO = bo;
        this.findAll = this.findAll.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    async findAll(request, response, next) {
        try {
            const tags = await this._tagBO.findAll();
            response.json(tags);
        } catch (e) {
            next(e);
        }
    }

    async save(request, response, next) {
        try {
            const newTag = request.body;
            await this._tagBO.save(newTag);
            response.sendStatus(201);
        } catch (e) {
            next(e);
        }
    }

    async delete(request, response, next) {
        try {
            const id = request.params.id;
            await this._tagBO.delete(id);
            response.sendStatus(204);
        } catch (e) {
            next(e);
        }
    }

    async update(request, response, next) {
        try {
            const id = request.params.id;
            const modifiedTag = request.body;
            await this._tagBO.update(id, modifiedTag);
            response.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }

}
