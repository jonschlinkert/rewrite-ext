/*!
 * rewrite-ext <https://github.com/jonschlinkert/rewrite-ext>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var exts = require('ext-map');

module.exports = function rewrite(fp, ext) {
  var dirname = path.dirname(fp);
  var extname = path.extname(fp);
  var basename = path.basename(fp, extname);
  ext = ext || exts[extname] || extname;
  if (ext[0] !== '.') {
    ext = '.' + ext;
  }
  return path.join(dirname, basename) + ext;
};
