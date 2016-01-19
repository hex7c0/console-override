# [console-override](https://github.com/hex7c0/console-override)

[![NPM version](https://img.shields.io/npm/v/console-override.svg)](https://www.npmjs.com/package/console-override)
[![Linux Status](https://img.shields.io/travis/hex7c0/console-override.svg?label=linux)](https://travis-ci.org/hex7c0/console-override)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/console-override.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/console-override)
[![Dependency Status](https://img.shields.io/david/hex7c0/console-override.svg)](https://david-dm.org/hex7c0/console-override)
[![Coveralls](https://img.shields.io/coveralls/hex7c0/console-override.svg)](https://coveralls.io/r/hex7c0/console-override)

Override `console` methods with `Date.toISOString` before text

## Installation

Install through NPM

```bash
npm install console-override
```
or
```bash
git clone git://github.com/hex7c0/console-override.git
```

## API

inside nodejs project
```js
var _console = require('console-override');
```

### _console.log()

return `console.log` method

### _console.info()

return `console.info` method

### _console.warn()

return `console.warn` method

### _console.error()

return `console.error` method

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
