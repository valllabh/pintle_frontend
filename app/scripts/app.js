(function () {
   'use strict';
   /**
   * @ngdoc overview
   * @name app
   * @description
   * # app
   *
   * Main module of the application.
   */


   angular.module('app', [
     // 'ngAnimate', // Disable ngAnimate for performance
     'ngAria',
     'ngCookies',
     'ngMessages',
     'ngResource',
     'ngRoute',
     'ngSanitize',
     'ngTouch',

     'Config',
     'SessionModule',
     'Filters',

     'FragmentHeader',
     'FragmentFooter',
     'FragmentSidebar',
     'UtilModule',
     'Components',

     'angular-loading-bar',
     'selectize',
     'datePicker',

     'Pages'
   ])

     .config([
       '$httpProvider',
       'cfpLoadingBarProvider',
       function(
         $httpProvider,
         cfpLoadingBarProvider
       ) {

         $httpProvider.interceptors.push('middleware');

         cfpLoadingBarProvider.includeBar = true;
         cfpLoadingBarProvider.includeSpinner = false;
         cfpLoadingBarProvider.latencyThreshold = 100;

       }
     ])

     .factory('middleware', ['$rootScope', function($rootScope) {
       return {
         request: function(request) {
           request.url = request.url.replace(/^api:\/\//gi, $rootScope.config.api.url);
           return request;
         }
       };
     }]);

}());
