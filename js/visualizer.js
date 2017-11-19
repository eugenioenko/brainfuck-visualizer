var app = angular.module('bfApp', []);
var scope;

app.factory('brainfuck', [function(){
	return new Brainfuck();
}]);

app.controller('bfController',['$scope', '$interval', 'brainfuck', function($scope, $interval, brainfuck){
	scope = $scope;
	$scope.code = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';
	$scope.brainfuck = brainfuck;
	$scope.timer = false;
	$scope.speed = 30;

	$scope.start = function(){
		$scope.stop();
		$scope.input = $scope.code.split('');
		brainfuck.reset();
		brainfuck.load($scope.code);
		brainfuck.active = true;
		$scope.timer = $interval(function(){
			if(brainfuck.active){
				brainfuck.tick();
			}
		}, $scope.speed);
	};
	$scope.pause = function(){
		brainfuck.active = false;
	};
	$scope.continue = function(){
		brainfuck.active = true;
	};
	$scope.stop = function(){
		if($scope.timer){
			$interval.cancel($scope.timer);
			$scope.timer = false;
		}
		brainfuck.active = false;
	};
	$scope.reset = function(){
		$scope.stop();
		$scope.input = $scope.code.split('');
		brainfuck.reset();
		brainfuck.load($scope.code);

	}
	$scope.next = function(){
		brainfuck.tick();
	};
	$scope.reset();
}]);