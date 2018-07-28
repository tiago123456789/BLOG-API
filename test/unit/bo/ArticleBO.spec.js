import sinon from "sinon";
import chai from "chai";
import ArticleBO from "./../../../src/bo/ArticleBO";

const expect = chai.expect;

describe("Suit tests ArticleBO", () => {

    const daoFake = {
        findAll: sinon.stub(),
        findById: sinon.stub()
    };

    afterEach(() => sinon.stub());

    it("Should return list articles", async () => {
        const articlesFake = [
            {
                title: "Article fake to test",
                content: "Article fake",
                tags: ["Test", "Fake"],
                comments: ["Fake test"]
            },
            {
                title: "Article fake to test",
                content: "Article fake",
                tags: ["Test", "Fake"],
                comments: ["Fake test"]
            },
            {
                title: "Article fake to test",
                content: "Article fake",
                tags: ["Test", "Fake"],
                comments: ["Fake test"]
            }
        ];

        daoFake.findAll.withArgs().returns(articlesFake);
        const articleBO = new ArticleBO(daoFake);
        const articlesReturned = await articleBO.findAll();
        expect(articlesReturned.length).to.be.eq(articlesFake.length);
    });

    it("Should return article based id information", async () => {
        const idFake = "56cb91bdc3464f14678934ba";
        const articleFake = {
            title: "Article fake to test",
            content: "Article fake",
            tags: ["Test", "Fake"],
            comments: ["Fake test"]
        };
        daoFake.findById.withArgs(idFake).returns(articleFake);
        const articleBO = new ArticleBO(daoFake);
        const articleReturned = await articleBO.findById(idFake);
        expect(articleReturned.title).to.eql(articleFake.title);
        expect(articleReturned.tags).to.eql(articleFake.tags);
        expect(articleReturned.content).to.eql(articleFake.content);        
    });

    it("Should trigger exception when not found register", async () => {
        const idFake = "56cb91bdc3464f14678934ba";
        daoFake.findById.withArgs(idFake).returns(null);
        const articleBO = new ArticleBO(daoFake);
        try {
            await articleBO.findById(idFake);
        } catch(e) {
            expect(e.code).to.eq("NOT_FOUND");
        }
        
    });
});