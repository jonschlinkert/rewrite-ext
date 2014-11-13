# rewrite-ext [![NPM version](https://badge.fury.io/js/rewrite-ext.svg)](http://badge.fury.io/js/rewrite-ext)

> Automatically re-write the destination extension of a filepath based on the source extension. e.g  `.coffee` => `.js`. This will only rename the ext, no other path parts are modified.

## Install
### Install with [npm](npmjs.org)

```bash
npm i rewrite-ext --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var rewrite = require('rewrite-ext');
rewrite('abc.coffee');
//=> 'abc.js'
rewrite('abc.less');
//=> 'abc.css'
```

Explicitly pass an extension to use:

```js
rewrite('./faux.js', '.foo');
//=> 'faux.foo'
```

## More examples

```js
rewrite('abc.styl');
//=> 'abc.css'
rewrite('abc.sass');
//=> 'abc.css'
rewrite('abc.scss');
//=> 'abc.css'
rewrite('abc.swig');
//=> 'abc.html'
rewrite('abc.hbs');
//=> 'abc.html'
rewrite('abc.md');
//=> 'abc.html'
rewrite('abc.tmpl');
//=> 'abc.html'
rewrite('./faux.js', '.bar');
//=> 'faux.bar'
rewrite('faux.js');
//=> 'faux.js'
rewrite('faux.css');
//=> 'faux.css'
rewrite('faux.html');
//=> 'faux.html'
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/rewrite-ext/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on November 13, 2014._