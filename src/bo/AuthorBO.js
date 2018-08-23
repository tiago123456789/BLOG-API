import NotFoundException from "./../exception/NotFoundException";
import NegotiationException from "./../exception/NegotiationException";
import AuthorDAO from "./../dao/AuthorDAO";
import Encoder from "../lib/Encoder";

export default class AuthorBO {
    
    constructor(dao) {
        this._dao = dao || new AuthorDAO();
    }

    async findByEmail(email) {
        return await this._dao.findByEmail(email);
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

    async delete(id) {
        await this.findById(id);
        // If author have more than 1 article not delete. 
        await this._dao.delete(id);
    }

    async update(id, authorModify) {
        await this.findById(id);

        if (authorModify.password) {
            authorModify.password = await Encoder.getHash(authorModify.password);
        }
        
        await this._dao.update(id, authorModify);
    }

    async _verifyIfEmailExists(email) {
        const author = await this._dao.findByEmail(email);
        return author; 
    }
}