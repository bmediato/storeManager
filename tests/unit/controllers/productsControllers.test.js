const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { products } = require('./mocks/productsController.mock');

describe('Testes de unidade camda controller products', function () {
  describe('listagem dos produtos', function () {
    it('retorna lista completa de produtos e status 200', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves({ type: null, message: products })

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products)
    });
    it('retorna produto caso id exista', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getById').resolves(products[0]);

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products[0]);

    });
    // it('ao passar um id invalido deve retornar um erro', async function () {
    //    const res = {};
    //   const req = { params: { id: 'a' } };

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();
    //   sinon.stub(productsService, 'getById').resolves({type: 'INVALID_VALUE', message: '"id" must be a number'});

    //   await productsController.getById(req, res);

    //   expect(res.status).to.have.been.calledWith(404);
    //   expect(res.json).to.have.been.calledWith('"id" must be a number');
    // });
    // it('ao passar um id que não exista deve retornar um erro', async function () {
    //   const res = {};
    //   const req = { params: { id: 999 } };

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();
    //   sinon.stub(productsService, 'getById').resolves('Product not found');

    //   await productsController.getById(req, res);

    //   expect(res.status).to.have.been.calledWith(404);
    //   expect(res.json).to.have.been.calledWith('Product not found');
    // });
  });
  afterEach(function () {
    sinon.restore();
  }) 
});