import NotFoundException from "./../exception/NotFoundException";

export default class ArticleBO {

    constructor(dao) {
        this._dao = dao; 
    }

    async findAll() {
        return this._dao.findAll();
    }

    async findById(id) {
        const article = await this._dao.findById(id);
        if (!article) {
            throw new NotFoundException("Article not found!");
        }

        return article;
    }
}