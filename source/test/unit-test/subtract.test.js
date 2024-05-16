var chai = require('chai');
const { operation } = require('../../domains/math-domain/basic-operations-repository');
const validateFieldNumberForBasicOperations = require('../../controllers/math-controller/math-verify-input');

describe('Calculadora - Subtração API', () => {
  it('Deve dar um erro ao passar pela validação de uma expressão com uma letra', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: ["10-10-a"],
        }
      });
    }).to.throw();
  });

  it('Deve dar um erro ao passar pela validação de uma expressão com um simbolo', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: ["10-10-#"],
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

  it('Deve realizar a subtração de um expressão', () => {
    const subtract = operation({
      body: {
        numbers: ["10-10-2"],
      }
    })

    chai.expect(subtract).to.equal(-2);
  },
  )
});