import TagCollections from "./../../../src/collections/Tag";

export default class Tag {

    static async deleteAll() {
        await TagCollections.deleteMany({});
    }
}