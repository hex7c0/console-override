'use strict';
/**
 * @file console.error example
 * @module console-override
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var error = require('..').error(); // use require('console-override') instead

console.error('console');
error('module');

// override
console.error = error;
console.error('console module');
