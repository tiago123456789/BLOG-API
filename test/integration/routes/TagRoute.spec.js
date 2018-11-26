import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
import TagService from "./../service/TagService";
import TokenService from "../service/TokenService";
import Token from "../../../src/security/Token";
import {CONSTANTES} from "../../../src/config/Constantes";

const expect = chai.expect;
const request = supertest;

describe("Test integration route tag", () => {
    const tagFake = { _id: "56cb91bdc3464f14678934ba", name: "Tag Fake" };
    const accessToken = TokenService.getAccessToken(Token.TYPE.ACCESS);

    before(() => {
        TagService.deleteAll();
    });

    afterEach(() => {
        TagService.deleteAll();
    });

    it("GET /tags/:id - Status code 404", (done) => {

        request(app)
            .get(`/tags/${tagFake._id}`)
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .expect(404)
            .end(done);
    });

    it("GET /tags/:id Status code 200", async () => {
        await TagService.create(tagFake);
        request(app)
            .get(`/tags/${tagFake._id}`)
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .expect(200);
    });

    it("GET /tags", (done) => {
        request(app)
            .get("/tags")
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .end((error, response) => {
                expect(response.body).to.be.an("array");
                done();
            });
    });

    it("POST /tags", (done) => {
        request(app)
            .post("/tags")
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .send(tagFake)
            .expect(201, done);
    });

    it("DELETE /tags/:id", function(done) {
        TagService.create(tagFake);

        request(app)
            .delete("/tags/" + tagFake._id)
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
                done();                
            });
    });

    it("PUT /tags/:id", function(done) {

        TagService.create(tagFake);
        request(app)
            .put("/tags/" + tagFake._id)
            .set(CONSTANTES.PARAM_AUTHORIZATION, accessToken)
            .send(tagFake)
            .expect(204)
            .end(done);
    })


});