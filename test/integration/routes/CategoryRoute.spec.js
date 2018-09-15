import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
import CategoryService from "./../service/CategoryService";
import TokenService from "../service/TokenService";
import Token from "../../../src/security/Token";
import { CONSTANTES } from "../../../src/config/Constantes";

const expect = chai.expect;
const request = supertest;

describe("Test integration route category", () => {
    const categoryFake = { _id: "56cb91bdc3464f14678934ba", description: "Category fake" };
    const accessToken = TokenService.getAccessToken(Token.TYPE.ACCESS);

    beforeEach(async () => {
        await CategoryService.deleteAll();
    });

    it("GET /categories", function(done) {
        request(app)
            .get("/categories")
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)            
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("array");
                done();
            });
    });

    it("POST /categories", function(done) {

        request(app)
            .post("/categories")
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)            
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
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)            
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
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)            
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
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)            
            .send(categoryFake)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
                done();
            })
    })


});