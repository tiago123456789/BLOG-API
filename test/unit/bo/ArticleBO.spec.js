import sinon from "sinon";
import chai from "chai";
import ArticleBO from "./../../../src/bo/ArticleBO";

const expect = chai.expect;

describe("Suit tests ArticleBO", () => {

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
        const daoFake = {
            findAll: sinon.stub()
        };

        daoFake.findAll.withArgs().returns(articlesFake);
        const articleBO = new ArticleBO(daoFake);
        const articlesReturned = await articleBO.findAll();
        expect(articlesReturned.length).to.be.eq(articlesFake.length);
    });
});