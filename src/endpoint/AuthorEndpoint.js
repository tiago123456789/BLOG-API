export default class AuthorEndpoint {

    constructor(bo) {
        this._bo = bo;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    async findAll(request, response, next) {
        try {
            const authors = await this._bo.findAll();
            response.status(200).json(authors);
        } catch(e) {
            next(e);
        }
    }

    async findById(request, response, next) {
        try {
            const id = request.params.id;
            const author = await this._bo.findById(id);
            response.status(200).json(author);
        } catch(e) {
            next(e);
        }
    }

    async save(request, response, next) {
        try {
            const newAuthor = request.body;
            await this._bo.save(newAuthor);
            response.sendStatus(201);
        } catch(e) {
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
            const authorModify = request.body;
            await this._bo.update(id, authorModify);
            response.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }
}