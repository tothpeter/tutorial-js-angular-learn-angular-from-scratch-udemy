'use strict';

angular.module('directoryApp')
.controller('directoryCtrl', function() {

  var dirList = this;

  dirList.toggle = true;

  dirList.list = [
    { name: 'Toma', age: 29, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/abbsol/128.jpg' },
    { name: 'Kalina Tech', age: 312, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/hchicha/128.jpg' },
    { name: 'Ross', age: 31, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adambetts/128.jpg' },
    { name: 'Ben', age: 32, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jetpartnersww/128.jpg' }
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
