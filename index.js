'use strict';
/**
 * @file console-override main
 * @module console-override
 * @subpackage main
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2015
 * @license GPLv3
 */

/*
 * initialize module
 */
var _date = new Date();

/*
 * functions
 */
/**
 * log output
 * 
 * @exports log
 * @function log
 * @return {Function}
 */
function log() {

  var _console = console.log;
  return function(args) {

    return _console(_date.toISOString(), args);
  };
}
module.exports.log = log;

/**
 * info output
 * 
 * @exports info
 * @function info
 * @return {Function}
 */
function info() {

  var _console = console.info;
  return function(args) {

    return _console(_date.toISOString(), args);
  };
}
module.exports.info = info;

/**
 * warn output
 * 
 * @exports warn
 * @function warn
 * @return {Function}
 */
function warn() {

  var _console = console.warn;
  return function(args) {

    return _console(_date.toISOString(), args);
  };
}
module.exports.warn = warn;

/**
 * error output
 * 
 * @exports error
 * @function error
 * @return {Function}
 */
function error() {

  var _console = console.error;
  return function(args) {

    return _console(_date.toISOString(), args);
  };
}
module.exports.error = error;
