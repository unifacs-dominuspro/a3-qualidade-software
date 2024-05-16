var chai = require('chai');
const { operation } = require('../../domains/math-domain/basic-operations-repository');
const validateFieldNumberForBasicOperations = require('../../controllers/math-controller/math-verify-input');

describe('Calculadora - Divisão API', () => {
  it('Deve dar um erro ao passar pela validação de uma expressão com uma letra', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: ["10/10/a"],
        }
      });
    }).to.throw();
  });

  it('Deve dar um erro ao passar pela validação de uma expressão com um simbolo', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: ["10/10/#"],
        }
      });
    }).to.throw();
  });

  it('Deve retornar que não é possível dividir em uma expressão com o número zero', () => {
    const division = operation({
      body: {
        numbers: ["10/10/0"],
      }
    })

    chai.expect(division).to.equal("Não é possível dividir por zero");
  },
  )

  it('Deve dar um erro ao passar pela validação de uma expressão vazia', () => {
    chai.expect(() => {
      validateFieldNumberForBasicOperations({
        body: {
          numbers: [""],
        }
      });
    }).to.throw();
  });

  it('Deve realizar a divisão de um expressão', () => {
    const multiply = operation({
      body: {
        numbers: ["10/2"],
      }
    })

    chai.expect(multiply).to.equal(5);
  },
  )
});