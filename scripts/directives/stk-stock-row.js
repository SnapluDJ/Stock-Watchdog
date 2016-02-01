'use strict';

angular.module('stockDogApp')
	.directive('stkStockRow', function ($timeout, QuoteService) {
		return{
			restrict: 'A',
			require: '^stkStockTable',
			scope: {
				stock: '=',
				isLast: '='
			},
			link: function ($scope, $element, $attrs, stockTableCtrl) {
				$element.tooltip({
					placement: 'left',
					title: $scope.stock.company.name
				});

				stockTableCtrl.addRow($scope);

				QuoteService.register($scope.stock);

				$scope.$on('$destroy', function () {
					
				})
			}
		}
	})