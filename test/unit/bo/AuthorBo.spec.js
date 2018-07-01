import sinon from "sinon";
import chai from "chai";

import AuthorBO from "./../../../src/bo/AuthorBO";
const expect = chai.expect;

describe("Suit tests AuthorBo", () => {

    const authorFake = { 
        name: "Author fake",
        describe: "Master fake",
        email: "authorfake@gmail.com",
        password: "1234"
    };

    const CODE_EXCEPTION = {
        NOT_FOUND: "NOT_FOUND",
        NEGOTIATION: "NEGOTIATION"
    }

    afterEach(() => sinon.restore);

    it("Should return all authors", async () => {
        const returnFake = [
            { 
                name: "Author fake",
                describe: "Master fake",
                email: "authorfake@gmail.com",
                password: "1234"
            },
            { 
                name: "Author fake",
                describe: "Master fake",
                email: "authorfake@gmail.com",
                password: "1234"
            }
        ];

        const daoFake = {
            findAll: sinon.stub()
        };

        daoFake.findAll.withArgs().returns(returnFake);
        const authorBO = new AuthorBO(daoFake);
        const authors = await authorBO.findAll();

        expect(authors.length).to.be.equal(returnFake.length);
        expect(authors[0].name).to.be.eql(returnFake[0].name);

    });

    it("Should return author specified", async () => {
        const idFake = 1;
        const daoFake = {
            findById: sinon.stub()
        };

        daoFake.findById.withArgs(idFake).returns(authorFake);
        const authorBO = new AuthorBO(daoFake);
        const authorReturned = await authorBO.findById(idFake);
        expect(authorReturned).to.be.eq(authorFake);
    });

    it("Should trigger exception when author not found", async () => {
        const idFake = 1;
        const daoFake = {
            findById: sinon.stub()
        };

        daoFake.findById.withArgs(idFake).returns(null);
        const authorBO = new AuthorBO(daoFake);
        try {
            const authorReturned = await authorBO.findById(idFake);
        } catch(e) {
            expect(e.code).to.be.eq(CODE_EXCEPTION.NOT_FOUND);
        }
    });

    it("Should delete author", async () => {
        const idFake = 1;
        const daoFake = {
            delete: sinon.spy(),
            findById: sinon.stub()
        };
        daoFake.findById.withArgs(idFake).returns(authorFake);
        const authorBO = new AuthorBO(daoFake);
        await authorBO.delete(idFake);
        chai.assert(daoFake.delete.calledOnce);        
    });

    it("Should trigger exception to the try deleted author than not exists", async () => {
        const idFake = 1;
        const daoFake = {
            delete: sinon.spy(),
            findById: sinon.stub()
        };
        daoFake.findById.withArgs(idFake).returns(null);
        const authorBO = new AuthorBO(daoFake);

        try {
            await authorBO.delete(idFake);
        } catch(e) {
            expect(e.code).to.be.eql(CODE_EXCEPTION.NOT_FOUND)
        }
    });

    it("Should update author", async () => {
        const idFake = 1;
        const daoFake = {
            update: sinon.spy(),
            findById: sinon.stub()
        };
        daoFake.findById.withArgs(idFake).returns(authorFake);
        const authorBO = new AuthorBO(daoFake);
        await authorBO.update(idFake, authorFake);
        chai.assert(daoFake.update.calledOnce);        
    });

    it("Should trigger exception to the update author than not exists", async () => {
        const idFake = 1;
        const daoFake = {
            update: sinon.spy(),
            findById: sinon.stub()
        };
        daoFake.findById.withArgs(idFake).returns(null);
        const authorBO = new AuthorBO(daoFake);
        try {
            await authorBO.update(idFake, authorFake);
        } catch(e) {
            expect(e.code).to.be.eql(CODE_EXCEPTION.NOT_FOUND)
        }
    });

    it("Should save new author", async () => {
        const daoFake = {
            findByEmail: sinon.stub(),
            save: sinon.spy()
        };

        daoFake.findByEmail.withArgs(authorFake.email).returns(null);
        const authorBO = new AuthorBO(daoFake);
        
        await authorBO.save(authorFake);
        chai.assert(daoFake.save.calledOnce);
    });

    it("Should trigger exception to the save new author with email already used.", async () => {
        const daoFake = {
            findByEmail: sinon.stub(),
            save: sinon.spy()
        };

        daoFake.findByEmail.withArgs(authorFake.email).returns(authorFake);
        const authorBO = new AuthorBO(daoFake);
        
        try {
            await authorBO.save(authorFake);
        } catch(e) {
            expect(e.code).to.be.eql(CODE_EXCEPTION.NEGOTIATION);
        }
    });
});