var chai = require('chai');
const { operation, sumWithPercent } = require('../../domains/math-domain/basic-operations-repository');

describe('Calculadora - Soma API', () => {
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
