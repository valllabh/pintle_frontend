'use strict';

angular.module('FragmentHeader', [])

  .controller('Header', [
    '$rootScope',
    '$scope',
    '$location',
    'Session',
    function(
      $rootScope,
      $scope,
      $location,
      Session
    ) {

      $rootScope.$watch('isUserLoggedin', function(){

        $scope.menu = [];
        $scope.menu.push( { url : '#/', label : 'Vists' } );

        if(!Session.isCapableOf('admin') ) {
          $scope.menu.push( { url : '#/personal-info/' + Session.getCurrentUserId(), label : 'Personal Info' } );
        }
        if( Session.isCapableOf('admin') ) {
          $scope.menu.push( { url : '#/manage-visits', label : 'Manage' } );
        }

      }, true);



    }
  ])

  .directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/fragments/header/views/header.html',
      link: function(s, e, a){
        var navMain = e.find('.nav-main');

        navMain.on('click', '.anchorNav', null, function (e) {
          navMain.collapse('hide');
        });

        navMain.on('click', '.login-anchor', null, function (e) {

          var $loginPage = $('.login-section');
          $loginPage.toggleClass('show', !$loginPage.hasClass('show'));


          // navMain.collapse('hide');
        });
      }
    };
  });
