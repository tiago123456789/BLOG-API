import DAO from "./DAO";
import AuthorCollection from "./../collections/Author";
import Author from "./../collections/Author";

export default class AuthorDAO extends DAO {

    constructor() {
        super(AuthorCollection);
    }

    async findByEmail(email) {
        return await this.getDAO().findOne({ email: email });
    }
}