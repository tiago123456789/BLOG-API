import NegotiationException from "./../exception/NegotiationException";
import NotFoundException from "./../exception/NotFoundException";


export default class CategoryBO {

    constructor(dao) {
        this._dao = dao;
    }

    async save(newCategory) {
        const alreadyCategoryWithName = await ths._existCategoryWithName(newCategory.name);
        if (alreadyCategoryWithName) {
            throw new NegotiationException("Category already register.");
        }

        await this._dao.save(newCategory);
    }

    async findAll() {
        return await this._dao.findAll();
    }

    async findById(id) {
        const category = await this._dao.findById(id);
        if (category) {
            throw new NotFoundException("Not found category");
        }

        return category;
    }

    async delete(id) {
        const category = await this.findById(id);
        if (category.number_articles) {
            NegotiationException("Category is relationship one article.")
        }
        await this._dao.delete(id);
    }

    async update(id, categoryModified) {
        await this.findById(id);
        await this._dao.update(id, categoryModified);
    }

    async _existCategoryWithName(name) {
        const category = await this._dao.findByName(name);
        return category;
    }
}