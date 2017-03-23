/*!
 * rewrite-ext <https://github.com/jonschlinkert/rewrite-ext>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var path = require('path');
var extend = require('extend-shallow');
var extMap = require('ext-map');

module.exports = function rewriteExt(filepath, options) {
  if (typeof options === 'string') {
    options = { ext: options };
  }

  var opts = extend({}, options);
  var extname = path.extname(filepath);
  var ext = opts.ext || '';

  if (opts.mapExt) {
    var exts = extend({}, extMap, opts.extMap);
    ext = exts[extname];
  }

  if (!ext) {
    ext = extname;
  }

  if (ext && ext.charAt(0) !== '.') {
    ext = '.' + ext;
  }

  var re = opts.extDot !== 'last' ? /(\.[^\/]*)?$/ : /(\.[^\/\.]*)?$/;
  filepath = filepath.replace(re, ext);
  if (filepath.slice(-1) === '.') {
    filepath = filepath.slice(0, -1);
  }

  return filepath;
};
