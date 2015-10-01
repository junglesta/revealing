/// <reference path="../_App.ts" />
module layout
{
	export interface IShellVM
	{
		message: String;
		count: number;
		increase()
	}

	export class Shell implements IShellVM {
		//region implementation of IShellVM
		message: string;
		count: number;
		increase()
		{
			this.count ++;
		}
		//endregion

		public static $inject = ['logger'];
		constructor(logger: ng.ILogService)
		{
			var vm = <IShellVM>this;
			vm.message = "a message comes here now!!";//
			vm.count = 3;
			logger.info('Shell created!');
		}


	}

	//this call has to be at the bottom
	//angular.module('app').controller('shell', Shell);
	app.module.register.controller('shell', Shell);

}

