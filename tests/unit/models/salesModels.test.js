const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { sales } = require('./mocks/salesModel.mock');

describe('Testes de unidade camada model sales', function () {
  it('recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);

    const result = await salesModel.getAll();

    expect(result).to.deep.equal(sales);
  });
  it('recupernado um produto atraves do id', async function () {
    sinon.stub(connection, 'execute').resolves([[sales[0]]]);

    const result = await salesModel.getById(1);

    expect(result).to.deep.equal([sales[0]]);
  });
  afterEach(function () {
    sinon.restore();
  });
});