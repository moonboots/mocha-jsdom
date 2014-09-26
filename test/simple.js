var expect = require('chai').expect;
var jsdom = require('../index');

describe('simple', function () {

  jsdom();

  it('has document', function () {
    var div = document.createElement('div');
    expect(div.nodeName).eql('DIV');
  });

  it('has history', function () {
    history.pushState({}, null, '/a/b/c');
    expect(location.href).eql('file:///a/b/c');
  });

});
