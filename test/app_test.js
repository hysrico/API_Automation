let server = require("../index");
let server = require("../data");
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

// Assertion Style
chai.should();

chai.use(chaiHttp);
const api = chai.request('https://api.publicapis.org')

// Assertion passed and failed schema
describe('Category', () => {
    beforeEach((done) => { 
        chai.request('http://localhost:5000')
        category.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('category animal', () => {
      it('it should list all cetogry', (done) => {
        chai.request('http://localhost:5000')
            .get('/entries/category')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('Api');
                  res.body.should.be.a('Description');
                  res.body.should.be.a('Auth');
                  res.body.should.be.a('HTTPS');
                  res.body.should.be.a('Cors');
                  res.body.should.be.a('Link');
                  res.body.should.be.a('Category');
              done();
            });
      });
  });
});