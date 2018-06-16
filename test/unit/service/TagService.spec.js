const sinon = require("sinon");
const chai = require("chai");
import TagBO from "./../../../src/bo/TagBO";

describe("Suited test TagService", () => {


    it("Should called save to the tag", async () => {
        const dao = {
            save: sinon.spy(),
            findByName: sinon.stub()
        }

        const tagFake = {
            name: "Tag fake"
        }

        dao.findByName.withArgs(tagFake.name).returns(null);
        const tagService = new TagBO(dao);
        await tagService.save(tagFake);

        chai.assert(dao.save.calledOnce);
    });
});