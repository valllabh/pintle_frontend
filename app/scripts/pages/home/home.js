'use strict';
angular.module('Home', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/pages/home/view/home.html',
        controller: 'HomeController'
      });
  })
  .controller('HomeController',[
    '$scope',
    '$rootScope',
    '$http',
    'Session',
    function ($scope, $rootScope, $http, $location, Session) {
      $scope.user = null;
    }
  ]);
