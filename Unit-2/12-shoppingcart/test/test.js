var code = require('../main');
var expect = require('chai').expect;

describe('When a user visits the homepage', function() {
  it('it should return hello', function() {
  expect(code.helloWorld()).to.equal("Hello")
});
  xit('Should return the word backwards', function(){
    expect(code.backWords('hello')).to.equal('olleh')
  })
});
