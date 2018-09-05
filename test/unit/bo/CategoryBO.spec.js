import sinon from "sinon";
import chai from "chai";
import CategoryBO from "./../../../src/bo/CategoryBO";

describe("Suited test CategoryBO", () => {

    afterEach(() => sinon.restore());

    it("Should findAll categories", async () => {
        const daoFake = {
            findAll: sinon.stub()
        };
        const categoriesFake = [
            { description: "Category 1", number_articles: 0 },
            { description: "Category 2", number_articles: 0 },
            { description: "Category 3", number_articles: 0 },
        ];
        daoFake.findAll.withArgs().returns(categoriesFake);

        const categoryBO = new CategoryBO(daoFake);
        const categoriasReturnadas = await categoryBO.findAll();
        chai.assert(categoriasReturnadas.length == categoriesFake.length);
    });

    it("Should find by id category", async () => {
        const idFake = 1;
        const categoryFake = { description: "Category teste", number_articles: 0 };
        const daoFake = {
            findById: sinon.stub()
        };

        daoFake.findById.withArgs(idFake).returns(categoryFake);
        const categoriaBO = new CategoryBO(daoFake);
        const categoryReturned = await categoriaBO.findById(idFake);
        chai.expect(categoryReturned.description).to.be.eql(categoryFake.description);
        chai.expect(categoryReturned.number_articles).to.be.eql(categoryFake.number_articles);
    });

    it("Should trigger exception if category not found", async () => {
        const idFake = 1;
        const categoryFake = { description: "Category teste", number_articles: 0 };
        const daoFake = {
            findById: sinon.stub(),
            findByName: sinon.stub()
        };

        daoFake.findByName.withArgs(categoryFake.description).returns(categoryFake);
        const categoriaBO = new CategoryBO(daoFake);
        try {
            const categoryReturned = await categoriaBO.findById(idFake);
        } catch(e) {
            chai.expect(e.name).to.be.eql('NOT_FOUND');
        }
    });

    it("Should delete category", async() => {
        const idFake = 1;
        const categoryFake = { description: "Category teste", number_articles: 0 };
        const daoFake = {
            findById: sinon.stub(),
            delete: sinon.spy()
        }

        daoFake.findById.withArgs(idFake).returns(categoryFake);
        const categoryBO = new CategoryBO(daoFake);
        await categoryBO.delete(idFake);
        chai.assert(daoFake.delete.calledOnce);
    });

    it("Should trigger exception to the delete a category not found", async () => {
        const idFake = 1;
        const categoryFake = { description: "Category teste", number_articles: 0 };
        const daoFake = {
            findById: sinon.stub(),
            delete: sinon.spy()
        }

        daoFake.findById.withArgs(idFake).returns(null);
        const categoryBO = new CategoryBO(daoFake);
        try {
            await categoryBO.delete(idFake);            
        } catch(e) {
            chai.expect(e.name).to.be.eq("NOT_FOUND");
        }
    });

    it("Should updated category", async () => {
        const idFake = 1;
        const categoryFake = { description: "Category teste", number_articles: 0 };
        const daoFake = {
            findById: sinon.stub(),
            update: sinon.spy()
        };
        daoFake.findById.withArgs(idFake).returns(categoryFake);
        const categoryBO = new CategoryBO(daoFake);
        await categoryBO.update(idFake, categoryFake);
        chai.assert(daoFake.update.calledOnce);
    });

    it("Should trigger exception to the try updated category", async () => {
        const idFake = 1;
        const categoryFake = null;
        const daoFake = {
            findById: sinon.stub()
        };
        daoFake.findById.withArgs(idFake).returns(categoryFake);
        const categoryBO = new CategoryBO(daoFake);
        try {
            await categoryBO.update(idFake, categoryFake);
        } catch(e) {
            chai.expect(e.name).to.eq("NOT_FOUND");
        }
    });
});