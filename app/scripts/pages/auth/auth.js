'use strict';

angular.module('Auth', [])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'scripts/pages/auth/view/login.html',
        containerClass: 'auth'
      })

      .when('/logout', {
        controller: 'LogoutController',
        templateUrl: 'scripts/pages/auth/view/logout.html',
        containerClass: 'auth'
      })

      .when('/forgot-password', {
        controller: 'ForgotPasswordController',
        templateUrl: 'scripts/pages/auth/view/forgot-password.html',
        containerClass: 'auth'
      })

  })

  .controller('LoginController', [
    '$scope',
    '$rootScope',
    '$location',
    'Session',
    function(
      $scope,
      $rootScope,
      $location,
      Session
    ) {

      if( Session.isLoggedin() ){
        $location.path( $rootScope.redirectPath || '/' );
        $rootScope.redirectPath = null;
        return;
      }

      $scope.error = false;
      $scope.message = '';

      $scope.login = function(){
        $scope.loading = true;
        $scope.error = false;
        $scope.message = '';

        if( !$scope.username || !$scope.password ){
          $scope.loading = false;
          $scope.error = true;
          $scope.message = 'Please enter Username & Password.';
          return;
        }

        Session.login( $scope.username, $scope.password, function (response) {
          $scope.loading = false;
          if (response.success) {
            $scope.error = false;
            $scope.message = '';
            $location.path( $rootScope.redirectPath || '/' );
            $rootScope.redirectPath = null;

          } else {
            $scope.error = true;
            $scope.message = response.message;
          }

        });
      }
    }
  ])

  .controller('LogoutController', [
    'Session',
    '$location',
    function(
      Session,
      $location
    ) {

      Session.logout(function(){
        $location.path('/login');
      });

    }
  ])


  .controller('ForgotPasswordController',[
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    'Session',
    function (
      $scope,
      $rootScope,
      $location,
      $http,
      Session
    ) {
      $scope.error = false;
      $scope.message = '';

      if( Session.isLoggedin() ){
        $location.path( '/' );
        return;
      }

      $scope.resetPassword = function(){
        $scope.loading = true;
        $scope.error = false;
        $scope.message = '';

        if( !$scope.email ){
          $scope.loading = false;
          $scope.error = true;
          $scope.message = 'Please enter valid Email.';
          return;
        }

        $http.post('api://users/reset', { email: $scope.email })
          .success(function(data, status, headers, config) {
            $scope.loading = false;
            $scope.error = false;
            $scope.message = 'Please check your email for further procedure.';
          })
          .error(function(data, status, headers, config) {
            $scope.loading = false;
            $scope.error = true;
            $scope.message = 'Please enter valid Email.';
          });

      }

    }
  ]);
