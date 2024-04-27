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

describe('Calculadora - Subtração API', () => {
  it('Deve realizar uma subtração de uma expressão', () => {

    const subtract = operation({
      body: {
        numbers: ["10-5-2"],
      }
    });

    chai.expect(subtract).to.equal(3);

  })
})