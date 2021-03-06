(function() {
	'use strict';

	angular.module('hellenicApp')
	  .controller('billingmaintenancedebitUpdateCtrl', billingmaintenancedebitUpdateCtrl);
	
	billingmaintenancedebitUpdateCtrl.$inject=['$scope', '$stateParams', 'billingmaintenancedebit', 'vesseltable' , 'customertable', 'expensetable'];

	function billingmaintenancedebitUpdateCtrl($scope, $stateParams, billingmaintenancedebit, vesseltable, customertable, expensetable) {

		// get a billingmaintenancedebit object from the factory
		$scope.billingmaintenancedebit = billingmaintenancedebit.query({ id: $stateParams.id });

		// initialize update controller
		$scope.initialize = function(){
			// create new instance of billingmaintenancedebit
			$scope.formData = new billingmaintenancedebit();
			// get vesseltable collection from the factory
			vesseltable.view().$promise.then(
				function(response) {
					$scope.vessels = response;
				});
			// get customertable collection from the factory
			customertable.view().$promise.then(
				function(response) {
					$scope.customers = response;
				});
			// get expensetable collection from the factory
			expensetable.view().$promise.then(
				function(response) {
					$scope.expenses = response;
				});
		};

		$scope.submit = function() {
			// perform CRUD operations update
			$scope.formData.$update({ id: $stateParams.id }, function(){ 
				$scope.initialize(); 
			});
		};

		$scope.initialize();
	}
})();