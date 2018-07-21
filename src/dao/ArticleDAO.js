import Article from "../collections/Article";
import DAO from "./DAO";

export default class ArticleDao extends DAO {

    constructor() {
        super(Article);
    }

    async addComment(idArticle, comment) {
        await this.getDAO().update({ _id: idArticle }, { $push: { comments: comment }});
    }
}