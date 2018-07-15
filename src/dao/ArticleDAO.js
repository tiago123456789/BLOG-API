import Article from "../collections/Article";
import DAO from "./DAO";

export default class ArticleDao extends DAO {

    constructor() {
        super(Article);
    }
}