/// <reference path="../../app/App.ts" />

/*jslint white: true, node:true, nomen:true */
/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject */
/*global openDatabase */
'use strict';

describe("service: Logger", function() {

	beforeEach(module('app'));

	var logger: common.Logger;

	beforeEach(inject(function(_logger_){
		logger = _logger_;
	}));

	/*
	beforeEach(function() {

	});
	*/

	it('should be registered', function() {
		expect(logger).toBeTruthy();
	});

	it('should have method info()', function() {
		expect(logger.info).toBeTruthy();
	});

	it('should have method warn()', function() {
		expect(logger.warn).toBeTruthy();
	});

	it('should have method error()', function() {
		expect(logger.error).toBeTruthy();
	});

	/*
	it('should have support for WebSQL', function() {
		//expect(App.VideosCtrl).not.to.equal(null);
		  var db = openDatabase('testDB', '1.0', 'testDB', 2 * 1024);
		  expect(db).toBeDefined();
		  expect(db).toBeTruthy();
		  //expect(db).toBeNull();
		  //expect(true).toBe(true);//f
	}); */
});
