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

    it("GET /categories", function(done) {
        request(app)
            .get("/categories")
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("array");
                done();
            });
    });

    it("POST /categories", function(done) {

        request(app)
            .post("/categories")
            .send(categoryFake)
            .expect(201)
            .end((error, response) => {
                expect(response.status).to.be.eq(201);
                done();
            });
    });

    it("GET /categories/:id", function(done) {
        request(app)
            .get("/categories/" + categoryFake._id)
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("object");
                done();                
            })
    });


    it("DELETE /categories/:id", function(done) {
        categoryFake._id = "56cb91bdc3464f14678934bc";
        CategoryService.create(categoryFake);
        request(app)
            .delete("/categories/" + categoryFake._id)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
                done();                
            });
    });

    it("PUT /categorias/:id", function(done) {
        CategoryService.create(categoryFake);
        request(app)
            .put("/categories/" + categoryFake._id)
            .send(categoryFake)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
                done();
            })
    })


});