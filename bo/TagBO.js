import NotFoundException from "./../exception/NotFoundException";

export default class TagBO {

    constructor(dao) {
        this._tagDAO = dao;
    }

    save(newTag) {
        this._tagDAO.create(newTag);
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
        await this.findById(id)
        this._tagDAO.update(id, dataModified);
    }
}