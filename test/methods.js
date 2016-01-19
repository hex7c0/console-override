'use strict';
/**
 * @file console methods test
 * @module console-override
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var _console = require('..');
var assert = require('assert');

/*
 * test module
 */
describe('methods', function() {

  describe('error', function() {

    it('should print 3 string', function(done) {

      assert.equal(typeof _console.error, 'function');
      var c = _console.error();

      console.error('console');
      c('module');
      console.error = c;
      console.error('console module');
      done();
    });
  });

  describe('info', function() {

    it('should print 3 string', function(done) {

      assert.equal(typeof _console.info, 'function');
      var c = _console.info();

      console.info('console');
      c('module');
      console.info = c;
      console.info('console module');
      done();
    });
  });

  describe('warn', function() {

    it('should print 3 string', function(done) {

      assert.equal(typeof _console.warn, 'function');
      var c = _console.warn();

      console.warn('console');
      c('module');
      console.warn = c;
      console.warn('console module');
      done();
    });
  });

  describe('log', function() {

    it('should print 2 string (mocha.log)', function(done) {

      assert.equal(typeof _console.log, 'function');
      var c = _console.log();

      console.log('console');
      c('module');
      // console.log = c;
      // console.log('console module');
      done();
    });
  });
});
