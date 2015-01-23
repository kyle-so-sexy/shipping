
(function() {
	'use strict';
	
	angular.module('hellenicApp')
	  .controller('customertableListCtrl', customertableListCtrl);

	customertableListCtrl.$inject=['$scope', '$filter', 'ngTableParams', 'customertable'];
	
	function customertableListCtrl($scope, $filter, ngTableParams, customertable) {
		
		// get a customertable collection from the factory
		var data = $scope.list = customertable.view();

		$scope.tableParams = new ngTableParams({
			// show first page
			page: 1,            
			// count per page
			count: 10,          
			// initial filter
			filter: { number: '' },
			// initial sorting
			sorting: { number: 'asc' }
		}, {
			// length of data
			total: data.length,
			getData: function($defer, params) {
			// use build-in angular filter
				var filteredData = params.filter() ?
					$filter('filter')(data, params.filter()) :
					data;
				var orderedData = params.sorting() ?
					$filter('orderBy')(filteredData, params.orderBy()) :
					data;

				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});

	}
})();