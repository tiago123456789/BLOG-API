import supertest from "supertest";
import chai from "chai";

import app from "./../../../src/config/Server";
const expect = chai.expect;
const request = supertest;

describe("Suit test integration Tag", () => {
    
    it("Should return all tags", async () => {
        request(app)
            .get("/tags")
            .expect(200)
            .end((error, response) => {
                expect(response).to.be.an("array");
            });
    });
});