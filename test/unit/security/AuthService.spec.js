import sinon from "sinon";
import chai from "chai";

import Encoder from "../../../src/lib/Encoder";
import AuthService from "../../../src/security/AuthService";
import Token from "../../../src/security/Token";
import TokenBuiler from "../../../src/security/TokenBuilder";

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

        sinon.restore();
    });

    it("Should trigger exception if people with email not exists", async () => {
        const credenciaisFake = {
            email: "teste@gmail.com",
            password: "teste"
        }

        const authorBoFake = {
            findByEmail: sinon.stub()
        };

        authorBoFake.findByEmail.withArgs(credenciaisFake.email).returns(null);
        try {
            const authService = new AuthService(authorBoFake);
            const objectReturned = await authService.login(credenciaisFake);
        } catch (e) {
            expect(e.name).to.be.eq("SECURITY");
            expect(e.status).to.be.eq(401);
            sinon.restore();
        }
    });

    it("Should trigger exception if password invalid.", async () => {
        const credenciaisFake = {
            email: "teste@gmail.com",
            password: "teste"
        }

        const pessoaFake = {
            id: 1,
            name: "Teste",
            email: "teste@gmail.com",
            password: await Encoder.getHash(credenciaisFake.password + credenciaisFake.password)
        };

        const authorBoFake = {
            findByEmail: sinon.stub()
        };

        authorBoFake.findByEmail.withArgs(credenciaisFake.email).returns(pessoaFake);
        try {
            const authService = new AuthService(authorBoFake);
            const objectReturned = await authService.login(credenciaisFake);
        } catch (e) {
            expect(e.name).to.be.eq("SECURITY");
            expect(e.status).to.be.eq(401);
            sinon.restore();
        }
    });

    it("Should authenticate using refreshToken", async () => {
        const emailFake = "teste@gmail.com";
        const token = new Token(Token.TYPE.REFRESH);
        token.addValuePayload(emailFake);
        const tokenBuilder = new TokenBuiler(token);
        const refreshToken = tokenBuilder.build();

        const authorBoFake = {
            findByEmail: sinon.stub()
        };

        const pessoaFake = {
            id: 1,
            name: "Teste",
            email: emailFake
        };

        authorBoFake.findByEmail.withArgs(credenciaisFake.email).returns(pessoaFake);
        const authService = new AuthService(authorBoFake);
        const objectReturned = await authService.loginByRefreshToken(refreshToken);
        expect(objectReturned).to.have.property("name");
        expect(objectReturned).to.have.property("id");
        expect(objectReturned).to.have.property("accessToken");        
        expect(objectReturned).to.have.property("refreshToken");       
    });
});