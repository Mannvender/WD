const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('request');
let server;
const app = require('../server');

// test driven approach of testing -- in small scale projects , whereas in large organizations -- behaviour driven testing

describe('server', () => {

    before((done) => {
        server = app.listen(2222, done)
    });

    // as request.get is async function but if you pass "done" in "it" it will force it to work as sync function
    // in the end call "done"
    it('rates should be correct', (done) => {
        request.get('http://localhost:2222/rate', (err, resp, body) => {
            let rates = JSON.parse(body);
            expect(rates.fixed).to.equal(50);
            expect(rates.perKm).to.equal(10);
            done();
        })
    });

    after(() => {
        server.close();
    })

});