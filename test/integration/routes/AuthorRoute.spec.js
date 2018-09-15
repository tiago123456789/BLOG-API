import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
import AuthorService from "./../service/AuthorService";
import Token from "../../../src/security/Token";
import TokenService from "../service/TokenService";
import { CONSTANTES } from "../../../src/config/Constantes";
const expect = chai.expect;
const request = supertest;

describe("Suit test integration AuthorRoute", () => {
    const authorFake = {
        _id: "56cb91bdc3464f14678934ba",
        name: "Author fake",
        email: "authorfake@gmail.com",
        password: "123466"
    };

    const accessToken = TokenService.getAccessToken(Token.TYPE.ACCESS);


    beforeEach(async () => {
        await AuthorService.deleteAll();
    });

    it("GET /authors", function (done) {
        request(app)
            .get("/authors")
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("array");
                done();
            });
    });

    it("POST /authors", function (done) {
        request(app)
            .post("/authors")
            .send(authorFake)
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .expect(201)
            .end((error, response) => {
                expect(response.status).to.be.eq(201);
                done();
            });
    });

    it("GET /authors/:id", function (done) {
        AuthorService.create(authorFake).then(() => {
            request(app)
                .get("/authors/" + authorFake._id)
                .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
                .expect(200);
        }).then(done);
    });

    it("DELETE /authors/:id", function (done) {
        AuthorService.create(authorFake).then(() => {
            request(app)
                .delete("/authors/" + authorFake._id)
                .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
                .expect(204)
                .end(done);
        });
    });

    it("PUT /authors/:id", function (done) {
        const author = {
            _id: "56cb91bdc3464f14678934bd",
            name: "Author fake 2",
            password: "asfasdf8asd5f1as",
            email: "authorfake1@gmail.com"
        };

        AuthorService.create(author)
            .then(() => {
                request(app)
                    .put("/authors/" + author._id)
                    .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
                    .send(author)
                    .expect(204)
                    .end(done);
            });
    });

});