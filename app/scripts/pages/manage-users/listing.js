 // 'use strict';
 // angular.module('PageManageUsers', [])
//
//   .config(function ($routeProvider) {
//     $routeProvider
//
//       .when('/manage-users', {
//         templateUrl: 'scripts/pages/manage-users/view/listing.html',
//         controller: 'manageUsersListing'
//       })
//
//       .when('/manage-users/add', {
//         templateUrl: 'scripts/pages/manage-users/view/add.html',
//         controller: 'manageUserAdd'
//       })
//
//       .when('/manage-users/edit/:userId', {
//         templateUrl: 'scripts/pages/manage-users/view/edit.html',
//         controller: 'manageUserEdit'
//       })
//
//   })
//
//   .controller('manageUsersListing', [
//     '$scope',
//     '$rootScope',
//     '$filter',
//     '$location',
//     '$http',
//     function(
//       $scope,
//       $rootScope,
//       $filter,
//       $location,
//       $http
//     ) {
//
//       $scope.users = [];
//       $scope.error = false;
//       $scope.showError = false;
//       $scope.messge = '';
//
//
//       $http.get('api://users/')
//         .success(function(data, status, headers, config) {
//           $scope.users = data;
//         })
//         .error(function(data, status, headers, config) {
//           $scope.error = true;
//           $scope.showError = false;
//           $scope.messge = 'Error encountered while loading user list.';
//         });
//
//   }
// ]);
