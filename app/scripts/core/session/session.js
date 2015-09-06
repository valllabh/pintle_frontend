'use strict';

angular.module('SessionModule', [])

  .run([
    '$rootScope',
    '$location',
    'Session',
    function ( $rootScope, $location, Session ) {
      // keep user logged in after page refresh

      if( !Session.isLoggedin() ){
        Session.loadSession();
      }

      var redirectIfNeeded = function(){

        // Redirect to login page if not logged in
        if( $location.path() !== '/login' && $location.path() !== '/forgot-password' && $location.path() !== '/myCarousel' && !Session.isLoggedin() ) {
          $rootScope.redirectPath = $location.path();
          $location.path('/login');
        }

      }

      $rootScope.$on('$locationChangeStart', redirectIfNeeded);

      redirectIfNeeded();

    }
  ])

  .factory('Session', [
    '$http',
    '$cookieStore',
    '$rootScope',
    function(
      $http,
      $cookieStore,
      $rootScope
    ) {
      var service = {};
      var sessionVar = '_ses';

      service.login = function (username, password, callback) {

        // Bypass Auth
        if( $rootScope.config.bypassAuth && $rootScope.config.dummyUsers && $rootScope.config.dummyUsers[ username ] && $rootScope.config.dummyUsers[ username ].password === password ){
          this.setSession( { user : $rootScope.config.dummyUsers[ username ], userId : username, id : 'SESSION_ID' } );
          callback({ success:true });
          return;
        }
        if($rootScope.config.bypassAuth){
          callback({ success:false, message: 'Username or Password is incorrect.' });
          return;
        }


        /* Use this for real Session
        ----------------------------------------------*/
        $http
        .post('api://users/login',
          { username: username, password: password },
          { params: {include: 'user'} }
        )
          .success(function(data, status, headers, config) {
            service.setSession(data);
            callback({
              success: true
            });
          })
          .error(function(data, status, headers, config) {
            switch (status) {
              case 401:
                callback({
                  success: false,
                  message: 'Username or Password is incorrect.'
                });
                break;
              case 400:
                callback({
                  success: false,
                  message: 'Please enter Username & Password.'
                });
                break;
              default:
                callback({
                  success: false,
                  message: 'Something went wrong.'
                });
            }
          });
      };

      service.logout = function (callback) {

        // Bypass Auth
        if( $rootScope.config.bypassAuth ){
          service.clearSession();
          callback();
          return;
        }

        /* Use this for real Session
        ----------------------------------------------*/
        $http
        .post('api://users/logout', { access_token : $rootScope[sessionVar].id })
          .success(function(data, status, headers, config) {
            service.clearSession();
            callback();
          })
          .error(function(data, status, headers, config) {
            service.clearSession();
            callback();
          });
      }

      service.isLoggedin = function(){
        return Boolean( ($rootScope[sessionVar] && $rootScope[sessionVar].id) );
      }

      service.isCapableOf = function(cap){
        var capabilities = ( this.getData('user') && this.getData('user').capabilities ) || [];
        return capabilities.indexOf(cap) > -1;
      }

      service.loadSession = function(){
        this.setSession( $cookieStore.get(sessionVar) );
      }

      service.setSession = function(data) {
        if( data && data.id ){
          $rootScope[sessionVar] = data;
          $rootScope.isUserLoggedin = true;
          $rootScope.currentUser = $rootScope[sessionVar];
          $cookieStore.put(sessionVar, $rootScope[sessionVar]);
          $http.defaults.headers.common['Authorization'] = $rootScope[sessionVar].id; // jshint ignore:line
        } else {
          this.clearSession();
        }
      }

      service.clearSession = function () {
        $rootScope[sessionVar] = null;
        $rootScope.isUserLoggedin = false;
        $rootScope.currentUser = null;
        $cookieStore.remove(sessionVar);
        $http.defaults.headers.common.Authorization = null;
      }

      service.getData = function( v ) {
        if( $rootScope[sessionVar] && $rootScope[sessionVar][ v ] ){
          return $rootScope[sessionVar][ v ];
        }
        return null;
      }

      service.getCurrentUserId = function() {
        return this.getData('userId');
      }

      return service;
  }]);
