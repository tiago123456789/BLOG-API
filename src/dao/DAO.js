
class DAO {

    constructor(dao) {
        this._dao = dao;
    }

    async save(newTag) {
        await this._dao.create(newTag);
    }

    async findById(id) {
        return await this._dao.findById(id);
    }

    async findAll(fieldsReturned) {
        return await this._dao.find({}, fieldsReturned);
    }

    async delete(id) {
        await this._dao.findByIdAndRemove(id);
    }

    async update(id, dataModified) {
        await this._dao.findOneAndUpdate({ _id: id }, dataModified);
    }

    getDAO() {
        return this._dao;
    }
}

export default DAO;