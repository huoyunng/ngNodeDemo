'use strict';

/**
 * @ngdoc function
 * @name ngNodeDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngNodeDemoApp
 */
angular.module('ngNodeDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
