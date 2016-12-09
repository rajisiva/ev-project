var app1 = angular.module('myapp', []);

app1.controller('mainctrl', ['$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);