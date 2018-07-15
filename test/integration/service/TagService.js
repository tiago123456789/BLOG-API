import TagCollection from "./../../../src/collections/Tag";

export default class Tag {

    static async create(tag) {
        await TagCollection.create(tag);
    }

    static async deleteAll() {
        await TagCollection.deleteMany({});
    }
}