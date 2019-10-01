let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const expect = require("chai").expect;


chai.use(chaiHttp);

describe('GET http server paths', () => {
    it('expect root path / to return "Moi maailma!"', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            expect(res.text).to.equal("Moi maailma!");
            done();
        });
    });
});
