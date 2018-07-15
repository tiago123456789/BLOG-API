import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
import CategoryService from "./../service/CategoryService";

const expect = chai.expect;
const request = supertest;

describe("Test integration route category", () => {
    const categoryFake = { _id: "56cb91bdc3464f14678934ba", description: "Category fake" };

    beforeEach(async () => {
        await CategoryService.deleteAll();
    });

    it("GET /categories", () => {
        request(app)
            .get("/categories")
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("array");
            });
    });

    it("POST /categories", () => {

        request(app)
            .post("/categories")
            .send(categoryFake)
            .expect(201)
            .end((error, response) => {
                expect(response.status).to.be.eq(201);
            });
    });

    it("GET /categories/:id", async () => {
        request(app)
            .get("/categories/" + categoryFake._id)
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("object");
            })
    });


    it("DELETE /categories/:id", () => {
        categoryFake._id = "56cb91bdc3464f14678934bc";
        CategoryService.create(categoryFake);
        request(app)
            .delete("/categories/" + categoryFake._id)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
            });
    });

    it("PUT /categorias/:id", () => {
        CategoryService.create(categoryFake);
        request(app)
            .put("/categories/" + categoryFake._id)
            .send(categoryFake)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
            })
    })


});