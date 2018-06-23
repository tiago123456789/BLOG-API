import DAO from "./DAO";
import CategoryCollection from "./../collections/Category";

export default class CategoryDAO extends DAO {

    constructor() {
        super(CategoryCollection);
    }

    async findByName(name) {
        return await this.getDAO().findOne({ description: name });
    }
}