export default class AuthorBO {
    
    constructor(dao) {
        this._dao = dao;
    }

    async findAll() {
        return await this._dao.findAll();
    }
}