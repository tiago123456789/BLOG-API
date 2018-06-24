import NotFoundException from "./../exception/NotFoundException";
import NegotiationException from "./../exception/NegotiationException";
import Encoder from "../lib/Encoder";

export default class AuthorBO {
    
    constructor(dao) {
        this._dao = dao;
    }

    async findAll() {
        return await this._dao.findAll({ email: 1, name: 1 });
    }

    async findById(id) {
        const author = await this._dao.findById(id);
        if (!author) {
            throw new NotFoundException("Author not found!");
        }
        return author;
    }

    async save(newAuthor){
        const someAuthorUsedEmail = await this._verifyIfEmailExists(newAuthor.email);
        if (someAuthorUsedEmail) {
            throw new NegotiationException("Email already used!");
        }
        newAuthor.password = await Encoder.getHash(newAuthor.password);
        await this._dao.save(newAuthor);
    }

    async _verifyIfEmailExists(email) {
        const author = await this._dao.findByEmail(email);
        return author; 
    }
}