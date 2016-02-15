'use strict';

angular.module('directoryApp')
.controller('directoryCtrl', function($scope) {
  $scope.list = [
    {name: 'Toma', age: 22},
    {name: 'Kalina Tech', age: 12},
    {name: 'Ben', age: 11}
  ];

  $scope.addPerson = function() {
    var newPerson = {
      name: $scope.name,
      age: $scope.age
    }

    $scope.list.push(newPerson)

    $scope.name = "";
    $scope.age = "";
  };
});
