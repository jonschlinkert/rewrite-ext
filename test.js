/*!
 * rewrite-ext <https://github.com/jonschlinkert/rewrite-ext>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT license
 */

'use strict';

var path = require('should');
var rewrite = require('./');


describe('ext', function () {
  describe('map extensions:', function () {
    it('should rewrite extensions dynamically.', function () {
      rewrite('abc.coffee').should.equal('abc.js');
      rewrite('abc.less').should.equal('abc.css');
      rewrite('abc.styl').should.equal('abc.css');
      rewrite('abc.sass').should.equal('abc.css');
      rewrite('abc.scss').should.equal('abc.css');
      rewrite('abc.swig').should.equal('abc.html');
      rewrite('abc.hbs').should.equal('abc.html');
      rewrite('abc.md').should.equal('abc.html');
      rewrite('abc.tmpl').should.equal('abc.html');
    });
  });

  describe('explicitly defined:', function () {
    it('should use the extension defined by the user.', function () {
      rewrite('./faux.js', '.foo').should.equal('faux.foo');
      rewrite('./faux.js', '.bar').should.equal('faux.bar');
    });
  });

  describe('pass through', function () {
    it('should pass through same-named extensions.', function () {
      rewrite('faux.js').should.equal('faux.js');
      rewrite('faux.css').should.equal('faux.css');
      rewrite('faux.html').should.equal('faux.html');
    });
  });
});