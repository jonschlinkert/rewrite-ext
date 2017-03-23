/*!
 * rewrite-ext <https://github.com/jonschlinkert/rewrite-ext>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var rewrite = require('./');

describe('ext', function() {
  describe('map extensions:', function() {
    it('should rewrite extensions dynamically', function() {
      assert.equal(rewrite('abc.coffee', {mapExt: true}), 'abc.js');
      assert.equal(rewrite('abc.less', {mapExt: true}), 'abc.css');
      assert.equal(rewrite('abc.styl', {mapExt: true}), 'abc.css');
      assert.equal(rewrite('abc.sass', {mapExt: true}), 'abc.css');
      assert.equal(rewrite('abc.scss', {mapExt: true}), 'abc.css');
      assert.equal(rewrite('abc.swig', {mapExt: true}), 'abc.html');
      assert.equal(rewrite('abc.hbs', {mapExt: true}), 'abc.html');
      assert.equal(rewrite('abc.md', {mapExt: true}), 'abc.html');
      assert.equal(rewrite('abc.tmpl', {mapExt: true}), 'abc.html');
    });
  });

  describe('explicitly defined:', function() {
    it('should use the extension defined by the user', function() {
      assert.equal(rewrite('./faux.js', '.foo'), './faux.foo');
      assert.equal(rewrite('./faux.js', '.bar'), './faux.bar');
    });
  });

  describe('pass through', function() {
    it('should pass through same-named extensions', function() {
      assert.equal(rewrite('faux.js'), 'faux.js');
      assert.equal(rewrite('faux.css'), 'faux.css');
      assert.equal(rewrite('faux.html'), 'faux.html');
    });
  });
});
