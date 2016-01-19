'use strict';
/**
 * @file console.warn example
 * @module console-override
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var warn = require('..').warn(); // use require('console-override') instead

console.warn('console');
warn('module');

// override
console.warn = warn;
console.warn('console module');
