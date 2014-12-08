'use strict';

/**
 * @ngdoc function
 * @name ngNodeDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngNodeDemoApp
 */
angular.module('ngNodeDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
