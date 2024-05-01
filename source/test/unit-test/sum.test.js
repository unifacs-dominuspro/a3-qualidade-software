var chai = require('chai');
const { operation } = require('../../domains/math-domain/basic-operations-repository');
const validateFieldNumberForBasicOperations = require('../../controllers/math-controller/math-verify-input');
const { response } = require('express');

describe('Calculadora - Soma API', () => {
  it('Deve dar um erro ao passar pela validação de uma expressão com uma letra', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: ["10+10+a"],
        }
      });
    }).to.throw();
  });

  it('Deve dar um erro ao passar pela validação de uma expressão com um simbolo', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: ["10+10+#"],
        }
      });
    }).to.throw();
  });

  it('Deve dar um erro ao passar pela validação de uma expressão vazia', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: [""],
        }
      });
    }).to.throw();
  });

  it('Deve realizar a soma de um expressão', () => {
    const sum = operation({
      body: {
        numbers: ["10+10+2"],
      }
    })

    chai.expect(sum).to.equal(22);
  },
  )
});