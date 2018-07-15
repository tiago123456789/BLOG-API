
export default class ArticleEndpoint {

    constructor(bo) {
        this._bo = bo;
        this.findAll = this.findAll.bind(this);
        this.findBydId = this.findBydId.bind(this);
    }

    async findAll(request, response) {
        const articles = await this._bo.findAll();
        response.json(articles);
    }

    async findBydId(request, response, next) {
        try {
            const id = request.params.id;
            const article = await this._bo.findBydId(id);
            respons.json(article);
        } catch(e) {
            next(e);
        }
    }
}