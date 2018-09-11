import sinon from "sinon";
import chai from "chai";

import Encoder from "../../../src/lib/Encoder";
import AuthService from "../../../src/security/AuthService";

const expect = chai.expect;

describe("Suit test Authentication and Authorization", () => {

    it("Should created information authentication if exist user", async () => {
        const credenciaisFake = {
            email: "teste@gmail.com",
            password: "teste"
        }
        
        const pessoaFake = {
            id: 1,
            name: "Teste",
            email: "teste@gmail.com",
            password: await Encoder.getHash(credenciaisFake.password)
        };     

        const authorBoFake = {
            findByEmail: sinon.stub()
        };

        authorBoFake.findByEmail.withArgs(credenciaisFake.email).returns(pessoaFake);
        const authService = new AuthService(authorBoFake);
        const objectReturned = await authService.login(credenciaisFake);
        expect(objectReturned).to.have.property("accessToken").to.be.a("string");
        expect(objectReturned).property("refreshToken").to.be.a("string");
        expect(objectReturned).property("id").to.be.a("number");
        expect(objectReturned).property("name").to.be.a("string");            
    });
});