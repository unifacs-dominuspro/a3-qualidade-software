/// <reference types="cypress" />

describe('Calculadora - Divisão API', () => {
  const baseUrl = 'http://localhost:' + Cypress.env('NODE_PORT');

  it('Deve realizar a divisão de uma expressão', () => {
    const numbers = { "numbers": ["10/2"] };

    cy.request('POST', `${baseUrl}/api/operation`, numbers)
      .then((response) => {
        expect(response.status).to.eq(201);
        // Adicione aqui outras asserções conforme necessário
      });
  });

  it('Deve retornar que não é permitido letra ou símbolo', () => {
    const numbers = { "numbers": ["a"] };

    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/operation`,
      body: numbers,
      failOnStatusCode: false // Para capturar status de erro
    }).then((response) => {
      expect(response.status).to.eq(422);
      // Adicione aqui outras asserções conforme necessário
    });
  });

  it('Deve retornar um erro quando a operação está com um valor vazio', () => {
    const numbers = { "numbers": [""] };

    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/operation`,
      body: numbers,
      failOnStatusCode: false // Para capturar status de erro
    }).then((response) => {
      expect(response.status).to.eq(422);
      // Adicione aqui outras asserções conforme necessário
    });
  });
});
