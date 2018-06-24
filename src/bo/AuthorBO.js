import NotFoundException from "./../exception/NotFoundException";

export default class AuthorBO {
    
    constructor(dao) {
        this._dao = dao;
    }

    async findAll() {
        return await this._dao.findAll();
    }

    async findById(id) {
        const author = await this._dao.findById(id);
        if (!author) {
            throw new NotFoundException("Author not found!");
        }
        return author;
    }
}