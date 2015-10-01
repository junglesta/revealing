var app;
(function (app) {
    //this has to be above all other angular.module calls (maybe we should put it in a separate js-file)
    //angular.module('app', ['ngMaterial']);
    var module = (function () {
        function module() {
        }
        module.register = angular.module('app', ['ngMaterial']);
        return module;
    })();
    app.module = module;
})(app || (app = {}));


/// <reference path="../_App.ts" />
var common;
(function (common) {
    var Logger = (function () {
        function Logger($log) {
            this.log = $log;
            this.info('Logger created!!!');
        }
        Logger.prototype.info = function (message) {
            this.log.info('Info: ' + message);
        };
        Logger.prototype.warn = function (message) {
            this.log.warn('Warn: ' + message);
        };
        Logger.prototype.error = function (message) {
            this.log.error('Error: ' + message);
        };
        Logger.$inject = ['$log'];
        return Logger;
    })();
    common.Logger = Logger;
    //this call has to be at the bottom
    //angular.module('app').service('logger', Logger);
    app.module.register.service('logger', Logger);
})(common || (common = {}));


/// <reference path="../_App.ts" />
var layout;
(function (layout) {
    var Shell = (function () {
        function Shell(logger) {
            var vm = this;
            vm.message = "a message comes here now!!"; //
            vm.count = 3;
            logger.info('Shell created!');
        }
        Shell.prototype.increase = function () {
            this.count++;
        };
        //endregion
        Shell.$inject = ['logger'];
        return Shell;
    })();
    layout.Shell = Shell;
    //this call has to be at the bottom
    //angular.module('app').controller('shell', Shell);
    app.module.register.controller('shell', Shell);
})(layout || (layout = {}));





/// <reference path="App.module.ts" />
/// <reference path="_App.ts" />



//# sourceMappingURL=app.js.map
