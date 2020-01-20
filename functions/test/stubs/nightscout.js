const sinon = require("sinon");
const proxyquire = require("proxyquire");

// Stub HTTP calls to Nightscout APIs with this canned response:
let stubs = {
  "node-fetch": sinon.stub().returns({
    ok: true,
    json: sinon.stub().returns([
      {
        sgv: 100,
        direction: "Flat"
      }
    ])
  })
};

module.exports = proxyquire("../../nightscout", stubs);
