/// <reference path="../../app/App.ts" />

/*jslint white: true, node:true, nomen:true */
/*global beforeEach, afterEach, describe, expect, it, spyOn, xdescribe, xit, inject */
/*global openDatabase */
'use strict';


//how to test controllers: http://angular-tips.com/blog/2014/06/introduction-to-unit-test-controllers/

describe("controller: Shell", function() {
	//var scope, controller;
	var controller: layout.IShellVM;

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope){
		//scope = $rootScope.$new();
		controller = $controller('shell', {});
	}));


	it('should be registered', function() {
		expect(controller).toBeTruthy();
	});

	it('should have a property: message', function() {
		//dump(controller.message);
		expect(controller.message).toBeDefined();
	});

	it('should have a property: message with a defined content', function() {
		expect(controller.message).toBe('a message comes here now!!');
	});

	it('should have a function: increase()', function() {
		//dump(controller.increase);
		expect(controller.increase).toBeDefined();
	});

	it('should increase count by 1 when calling: increase()', function() {
		expect(controller.count).toBe(3);
		controller.increase();
		expect(controller.count).toBe(4);
	});
});
