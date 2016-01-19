'use strict';
/**
 * @file console.info example
 * @module console-override
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var info = require('..').info(); // use require('console-override') instead

console.info('console');
info('module');

// override
console.info = info;
console.info('console module');
