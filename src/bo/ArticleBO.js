import NotFoundException from "./../exception/NotFoundException";
import NegotiationException from "./../exception/NegotiationException";
import AuthorDAO from "./../dao/AuthorDAO";
import AuthorBO from "./AuthorBO";

export default class ArticleBO {

    constructor(dao) {
        this._dao = dao; 
        this._authorBO = new AuthorBO(new AuthorDAO());
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

    async save(article) {
        if (!article.category) {
            throw new NegotiationException("Category is required.");
        }

        if (!article.author) {
            throw new NegotiationException("Author is required.");
        }
        
        await this._authorBO.findById(article.author.id);
        await this._dao.save(article);
    }

    async delete(id) {
        await this.findById(id);
        this._dao.delete(id);  
    }

    async update(id, articleModified) {
        await this.findById(id);
        this._dao.update(id, articleModified);
    }
}