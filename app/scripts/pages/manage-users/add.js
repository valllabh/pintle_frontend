// 'use strict';
// angular.module('PageManageUsers')
//
//   .controller('manageUserAdd', [
//     '$scope',
//     '$rootScope',
//     '$location',
//     '$routeParams',
//     '$http',
//     'Util',
//     'debounce',
//     function (
//       $scope,
//       $rootScope,
//       $location,
//       $routeParams,
//       $http,
//       Util,
//       debounce
//     ) {
//
//       $scope.user = null;
//       $scope.error = false;
//       $scope.messge = '';
//
//       $scope.statuses = {
//         submitting : false,
//         saved : false,
//         error : false
//       };
//
//       $scope.onSubmit = function(){
//         $scope.userForm.email.$setValidity('uniqueness', true);
//         $scope.userForm.username.$setValidity('uniqueness', true);
//
//         if( !$scope.userForm.$valid ){ return; }
//
//         $scope.statuses.saved = false;
//         $scope.statuses.submitting = true;
//         $scope.statuses.error = false;
//
//         var data = Util.pluckOnly($scope.user, [
//           'name',
//           'username',
//           'password',
//           'email',
//           'capabilities'
//         ]);
//
//         data.capabilities = data.capabilities.split('\n').filter(Util.notBlank).filter(Util.trim);
//
//         $http.post('api://users/', data )
//           .success(function(data, status, headers, config) {
//             $scope.statuses.submitting = false;
//             $scope.statuses.saved = true;
//           })
//           .error(function(data, status, headers, config) {
//             $scope.statuses.submitting = false;
//             $scope.statuses.saved = false;
//             $scope.statuses.error = true;
//             if( data && data.error && data.error.details && data.error.details.codes ){
//               if( data.error.details.codes.email && data.error.details.codes.email.length && data.error.details.codes.email.shift() == 'uniqueness' ){
//                 $scope.userForm.email.$setValidity('uniqueness', false);
//               }
//               if( data.error.details.codes.username && data.error.details.codes.username.length && data.error.details.codes.username.shift() == 'uniqueness' ){
//                 $scope.userForm.username.$setValidity('uniqueness', false);
//               }
//             }
//           });
//       }
//
//   }]);
