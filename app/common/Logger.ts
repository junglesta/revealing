/// <reference path="../_App.ts" />
module common
{
	export class Logger
	{
		private log: ng.ILogService;

		public static $inject = ['$log'];
		constructor($log: ng.ILogService)
		{
			this.log = $log;
			this.info('Logger created!!!');
		}

		info(message: String)
		{
			this.log.info('Info: ' + message);
		}

		warn(message: String)
		{
			this.log.warn('Warn: ' + message);
		}

		error(message: String)
		{
			this.log.error('Error: ' + message);
		}
	}

	//this call has to be at the bottom
	//angular.module('app').service('logger', Logger);
	app.module.register.service('logger', Logger);
}
