
class DAO {

    constructor(dao) {
        this._dao = dao;
    }

    save(newTag) {
        this._dao.create(newTag);
    }

    async findById(id) {
        return await this._dao.findById(id);
    }

    async findAll() {
        return await this._dao.find({});
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