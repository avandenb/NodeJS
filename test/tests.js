/**
 * Created by _Install on 5/30/2017.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);

describe('RandomUser', function(){
    it('GET /apiv2/api', function(done){
        chai.request(server)
            .get('/apiv2/api')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json
                done();
            });
    });
});


describe('Param', function(){
    it('GET /apiv1/param/2000', function(done){
        chai.request(server)
            .get('/apiv1/param/2000')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('param')
                res.body.should.have.property('param').eql('2000')
                console
                done();
            });
    });
});

describe('Query', function(){
    it('GET /apiv2/query?year=2000', function(done){
        chai.request(server)
            .get('/apiv2/query?year=2000')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('year')
                res.body.should.have.property('year').eql('2000')
                console
                done();
            });
    });
});