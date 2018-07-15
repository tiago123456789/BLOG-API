import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
import TagService from "./../service/TagService";
const expect = chai.expect;
const request = supertest;

describe("Suit test integration Tag", () => {
    const tagFake = { _id: "56cb91bdc3464f14678934ba", name: "Tag Fake" };

    after(() => {
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
            .expect(201);
    });

    it("DELETE /tags/:id", () => {
        request(app)
            .delete("/tags/" + tagFake._id)
            .expect(204);
    });

    it("PUT /tags/:id", () => {
        request(app)
            .put("/tags/" + tagFake._id)
            .expect(204);
    })


});