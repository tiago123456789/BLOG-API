import NotFoundException from "./../exception/NotFoundException";
import NegotiationException from "./../exception/NegotiationException";

export default class TagBO {

    constructor(dao) {
        this._tagDAO = dao;
    }

    save(newTag) {
        if(this._existTagWithName(newTag.name)) {
            throw new NegotiationException("Already exists this tag!");
        }

        this._tagDAO.save(newTag);
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
        try {
            await this.findById(id);
            this._tagDAO.delete(id);
        } catch(e) {
            console.log(e);
        }
        
    }

    async update(id, dataModified) {
        console.log(id),
        console.log(dataModified);
        await this.findById(id)
        this._tagDAO.update(id, dataModified);
    }

    async _existTagWithName(name) {
        const tagReturned = await this._tagDAO.findByName(name);
        return tagReturned != null;
    }
}