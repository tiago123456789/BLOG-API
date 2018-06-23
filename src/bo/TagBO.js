import NotFoundException from "../exception/NotFoundException";
import NegotiationException from "../exception/NegotiationException";

export default class TagBO {

    constructor(dao) {
        this._tagDAO = dao;
    }

    async save(newTag) {
        const existTag = await this._existTagWithName(newTag.name)
        
        if(existTag) {
            throw new NegotiationException("Already exists this tag!");
        }

        await this._tagDAO.save(newTag);
    }

    async findById(id) {
        const tag = await this._tagDAO.findById(id);

        if (tag == null) {
            throw new NotFoundException("Tag not found!");
        }

        return tag;
    }

    async findAll() {
        return await this._tagDAO.findAll();
    }

    async delete(id) {
        await this.findById(id);
        await this._tagDAO.delete(id);
    }

    async update(id, dataModified) {
        await this.findById(id)
        this._tagDAO.update(id, dataModified);
    }

    async _existTagWithName(name) {
        const tagReturned = await this._tagDAO.findByName(name);
        return tagReturned;
    }
}