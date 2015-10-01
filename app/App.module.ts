module app
{
	//this has to be above all other angular.module calls (maybe we should put it in a separate js-file)
	//angular.module('app', ['ngMaterial']);
    export class module
	{
		public static register = angular.module('app', ['ngMaterial']);
	}
}
