'use strict';

angular.module('directoryApp')
.controller('directoryCtrl', function() {

  var dirList = this;

  dirList.toggle = false;

  dirList.list = [
    {name: 'Toma', age: 22},
    {name: 'Kalina Tech', age: 312},
    {name: 'Ben', age: 11}
  ];

  dirList.addPerson = function() {
    var newPerson = {
      name: dirList.name,
      age: dirList.age
    }

    dirList.list.push(newPerson)

    dirList.name = "";
    dirList.age = "";
  };
});
