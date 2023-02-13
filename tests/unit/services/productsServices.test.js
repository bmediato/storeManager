const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { products } = require('./mocks/productsService.mock');

describe('Testes de unidade camada service products', function () {
  describe('listagem dos produtos', function () {
    it('retorna a lista completa de produtos', async function () {
      sinon.stub(productsModel, 'getAll').resolves(products);
      
      const result = await productsService.getAll();

      expect(result.type).to.equal(null)
      expect(result.message).to.deep.equal(products);
    });
    it('retorna produto caso o ID exista', async function () {
      sinon.stub(productsModel, 'getById').resolves(products[0]);

      const result = await productsService.getById(1);

      expect(result).to.deep.equal(products[0]);
    });
    it('retorna erro caso id seja invalido', async function () {
      const result = await productsService.getById('a');

      expect(result.message).to.equal('"id" must be a number');
    });
    it('retorna erro caso id não exista', async function () {
      sinon.stub(productsModel, 'getById').resolves(undefined);

      const result = await productsService.getById(99);

      expect(result.message).to.equal('Product not found');
    })
  });
   afterEach(function () {
    sinon.restore();
  });
});