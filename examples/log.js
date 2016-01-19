'use strict';
/**
 * @file console.log example
 * @module console-override
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var log = require('..').log(); // use require('console-override') instead

console.log('console');
log('module');

// override
console.log = log;
console.log('console module');
