import AuthorCollection from "./../../../src/collections/Author";

export default class AuthorService {

    static async create(author) {
        await AuthorCollection.create(author);
    }

    static async deleteAll() {
        await AuthorCollection.deleteMany({});
    }
}