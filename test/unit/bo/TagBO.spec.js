const sinon = require("sinon");
const chai = require("chai");
import TagBO from "./../../../src/bo/TagBO";

const instanceTagBO = (dao) => new TagBO(dao);

describe("Suited test TagService", () => {
    const tagFake = { name: "Tag fake" };

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
        } catch (e) {
            chai.expect(e.name).to.be.equal("NOT_FOUND");
            chai.assert(daoFake.delete.notCalled);
        }
    });

    it("Should search all tags", async () => {
        const daoFake = {
            findAll: sinon.stub()
        };

        const tagsFake = [
            { name: "Tag fake 1" },
            { name: "Tag fake 2" },
            { name: "Tag fake 3" },
        ]

        daoFake.findAll.withArgs().returns(tagsFake);

        const tagBO = instanceTagBO(daoFake);
        const tagsReturned = await tagBO.findAll();
        chai.expect(tagsReturned.length).to.equal(tagsFake.length);
    });

    it("Should called method update to the updated tag", async () => {
        const idTagFake = 1;
        const tagFake = {
            name: "Tag fake"
        };

        const daoFake = {
            findById: sinon.stub(),
            update: sinon.spy()
        };

        daoFake.findById.withArgs(idTagFake).returns(tagFake);
        const tagBO = instanceTagBO(daoFake);

        await tagBO.update(idTagFake, tagFake);
        chai.assert(daoFake.update.calledOnce);
    });

    it("Should trigger exception if tag not found to the called method update tag", async () => {
        const idTagFake = 1;
        const tagFake = {
            name: "Tag fake"
        };

        const daoFake = {
            findById: sinon.stub(),
            update: sinon.spy()
        };

        daoFake.findById.withArgs(idTagFake).returns(null);
        const tagBO = instanceTagBO(daoFake);

        try {
            await tagBO.update(idTagFake, tagFake);
        } catch(e) {
            chai.expect(e.name).to.be.equal("NOT_FOUND");
        }
    });

    it("Should returned tag to the called method findById", async () => {
        const idTagFake = 1;
        const tagFake = {
            name: "Tag fake"
        };

        const daoFake = {
            findById: sinon.stub()
        };

        daoFake.findById.withArgs(idTagFake).returns(tagFake);
        const tagBO = instanceTagBO(daoFake);
        const tagReturned = await tagBO.findById(idTagFake);
        chai.expect(tagReturned.name).to.be.equal(tagFake.name);
    });

    it("Should returned tag to the called method findById", async () => {
        const idTagFake = 1;
        const tagFake = {
            name: "Tag fake"
        };

        const daoFake = {
            findById: sinon.stub()
        };

        daoFake.findById.withArgs(idTagFake).returns(tagFake);
        const tagBO = instanceTagBO(daoFake);
        const tagReturned = await tagBO.findById(idTagFake);
        chai.expect(tagReturned.name).to.be.equal(tagFake.name);
    });

    it("Should trigger exception to the called method findById and tag not found", async () => {
        const idTagFake = 1;
        const tagFake = {
            name: "Tag fake"
        };

        const daoFake = {
            findById: sinon.stub()
        };

        daoFake.findById.withArgs(idTagFake).returns(null);
        const tagBO = instanceTagBO(daoFake);
        try {
            const tagReturned = await tagBO.findById(idTagFake);
        } catch(e) {
            chai.expect(e.name).to.be.equal("NOT_FOUND");
        }
    })

});