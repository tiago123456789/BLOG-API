import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
import TagService from "./../service/TagService";
const expect = chai.expect;
const request = supertest;

describe("Test integration route tag", () => {
    const tagFake = { _id: "56cb91bdc3464f14678934ba", name: "Tag Fake" };

    before(() => {
        TagService.deleteAll();
    });

    it("GET /tags", async () => {
        request(app)
            .get("/tags")
            .expect(200)
            .end((error, response) => {
                expect(response.body).to.be.an("array");
            });
    });

    it("POST /tags", async () => {
        request(app)
            .post("/tags")
            .send(tagFake)
            .expect(201)
            .end((error, response) => {
                expect(response.status).to.be.eq(201);
            });
    });

    it("DELETE /tags/:id", () => {
        request(app)
            .delete("/tags/" + tagFake._id)
            .expect(204)
            .end((error, response) => {
                expect(response.status).to.be.eq(204);
            });
    });

    it("PUT /tags/:id", () => {
        request(app)
            .put("/tags/" + tagFake._id)
            .send(tagFake)
            .expect(204);
    })


});