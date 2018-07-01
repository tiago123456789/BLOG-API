import sinon from "sinon";
import chai from "chai";

import AuthorBO from "./../../../src/bo/AuthorBO";
const expect = chai.expect;

describe("Suit tests AuthorBo", () => {

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
        const authorFake = { 
            name: "Author fake",
            describe: "Master fake",
            email: "authorfake@gmail.com",
            password: "1234"
        };
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
            expect(e.code).to.be.eq("NOT_FOUND");
        }
    });

});