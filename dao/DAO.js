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

    delete(id) {
        this._dao.findByIdAndDelete(id);
    }

    update(id, dataModified) {
        this._dao.findByIdAndUpdate(id, dataModified);
    }
}

export default DAO;