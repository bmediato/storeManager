const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products } = require('./mocks/productsModel.mock');

describe('Testes de unidade camada model products', function () {
  it('recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productsModel.getAll();

    expect(result).to.deep.equal(products);
  });
  it('recuperando um produto atraves do id', async function () {
    sinon.stub(connection, 'execute').resolves([products[0]]);

    const result = await productsModel.getById(1);

    expect(result).to.be.deep.equal(products[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});