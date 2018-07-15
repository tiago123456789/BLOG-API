import CategoryCollection from "./../../../src/collections/Category";

export default class CategoryService {

    static async create(category) {
        await CategoryCollection.create(category);
    }

    static async deleteAll() {
        await CategoryCollection.deleteMany({});
    }
}