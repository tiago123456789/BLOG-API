const sinon = require("sinon");
const chai = require("chai");
import TagBO from "./../../../src/bo/TagBO";

const instanceTagBO = (dao) => new TagBO(dao);

describe("Suited test TagService", () => {

    const tagFake = {
        name: "Tag fake"
    }

    afterEach(() => {
        sinon.restore();
    });

    it("Should called save to the tag", async () => {
        const dao = {
            save: sinon.spy(),
            findByName: sinon.stub()
        }

        dao.findByName.withArgs(tagFake.name).returns(null);
        const tagService = instanceTagBO(dao);
        await tagService.save(tagFake);

        chai.assert(dao.save.calledOnce);
        sinon.restore();
    });

    it("Should deleted tag", async () => {
        const idTagFake = 1;
        const daoFake = {
            findById: sinon.stub(),
            delete: sinon.spy()
        }

        daoFake.findById.withArgs(idTagFake).returns(tagFake);
        const tagBo = instanceTagBO(daoFake);
        await tagBo.delete(idTagFake);
        chai.assert(daoFake.delete.calledOnce);
    });

    it("Should not delete tag if not exist tag", async () => {
        const idTagFake = 1;
        const daoFake = {
            findById: sinon.stub(),
            delete: sinon.spy()
        };
        
        daoFake.findById.withArgs(idTagFake).returns(null);
        const tagBo = instanceTagBO(daoFake);

        try {
            await tagBo.delete(idTagFake);
        } catch(e) {
            chai.expect(e.code).to.be.equal("NOT_FOUND");
            chai.assert(daoFake.delete.notCalled);
        }
    });
});