export default class ArticleEndpoint {

    constructor(bo) {
        this._bo = bo;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    async findAll(request, response) {
        const articles = await this._bo.findAll();
        response.json(articles);
    }

    async findById(request, response, next) {
        try {
            const id = request.params.id;
            const article = await this._bo.findById(id);
            response.json(article);
        } catch(e) {
            next(e);
        }
    }

    async save(request, response, next) {
        try {
            const newArticle = request.body;
            await this._bo.save(newArticle);
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
            const articleModified = request.body;
            await this._bo.update(id, articleModified);
            response.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }

    async addComment(request, response, next) {
        try {
            const id = request.params.id;
            const body = request.body;
            await this._bo.addComment(id, body.comment);
            response.sendStatus(201);
        } catch(e) {
            next(e);
        }
    }
}