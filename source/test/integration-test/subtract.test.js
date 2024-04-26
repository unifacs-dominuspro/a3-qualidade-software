var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Calculadora - Subtração API', () => {
  it('Deve realizar a subtração de um expressão', (done) => {

    let numbers = {
      "numbers": ["10-5-2"],
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/api/operation')
      .type('json')
      .send(numbers)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(201);

        done();
      })
  },
    it('Deve retornar que não é permitido letra ou símbolo', (done) => {

      let numbers = {
        "numbers": ["a"]
      }

      chai.request('localhost:' + process.env.NODE_PORT)
        .post('/api/operation')
        .type('json')
        .send(numbers)
        .end((error, response) => {
          if (error) {
            done(error);
          }
          chai.expect(response).to.have.status(422);
          done();
        })
    },
    ),
    it('Deve retornar um erro quando a operação está com um valor vazio', (done) => {

      let numbers = {
        "numbers": [""]
      }

      chai.request('localhost:' + process.env.NODE_PORT)
        .post('/api/operation')
        .type('json')
        .send(numbers)
        .end((error, response) => {
          if (error) {
            done(error);
          }
          chai.expect(response).to.have.status(422);
          done();
        })
    }));
});


