(function () {
  'use strict';
  angular.module('Config', [])
    .run([
      '$rootScope',
      '$filter',
      '$anchorScroll',
      function ( $rootScope, $filter, $anchorScroll) {

        function getConfig(ENV){

          var config = {
            bypassAuth : true,
            serverStatus : {
              url: null,
              duration : 10000,
              connected: false
            },
            api : {
              url : null
            },
            brand: 'Schneider Electric',
            developer: 'eAP',
            version: '0.1.0',
            reloadPage : true, //remove from here
            isMobile : false,
            dummyUsers: {
              // root : {
              //   id : 'root',
              //   username : 'root',
              //   password : 'root',
              //   name : 'Root',
              // },
              admin : {
                id : 'admin',
                username : 'admin',
                password : 'admin',
                name : 'Admin',
                capabilities : ['admin']
              },
              visitor : {
                id : 'visitor',
                username : 'visitor',
                password : 'visitor',
                name : 'Sam',
                capabilities : ['visitor']
              }
            }
          };

          switch (ENV) {
            case 'LOCALHOST':
              config.serverStatus.url = '//localhost:3000'; //VALLABH:MBP
              config.api.url = '//localhost:3000/api/'; //VALLABH:MBP
              break;
            case 'LOCAL':
              config.serverStatus.url = '//192.168.0.200:3000'; //VALLABH:MBP
              config.api.url = '//192.168.0.200:3000/api/'; //VALLABH:MBP
              break;
            case 'INTERNAL_TESTING':
              config.serverStatus.url = '//128.199.238.17:3001'; //Digital Ocean NODESERVERV1.1
              config.api.url = '//128.199.238.17:3001/api/'; //Digital Ocean NODESERVERV1.1
              break;
          }

          return config;
        }

        $rootScope.config = getConfig('INTERNAL_TESTING'); // INTERNAL_TESTING || LOCAL || LOCALHOST

        if ( Modernizr.mq('only all and (max-width: 480px)') ) {
          $rootScope.config.isMobile = true;
        }


        //FIXME: --------------------------- REMOVE BELOW THIS --------------------


        $('body').addClass(Modernizr.touch ? 'touch-device' : 'mouse-device');
        var myEvent = window.attachEvent || window.addEventListener;
        var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compatible

        myEvent(chkevent, function(e) {
          if($rootScope.config.reloadPage === false) {
            var confirmationMessage = ' ';  // a space
            (e || window.event).returnValue = confirmationMessage;
            return confirmationMessage;
          }
        });

        $rootScope.$on('cfpLoadingBar:loading', function() { //event, args
          $('body:not(.polling)').addClass('page-loading');
        });

        $rootScope.$on('cfpLoadingBar:loaded', function() {
          $('body').removeClass('page-loading');
        });

        $rootScope.pageTitle = '';
        $rootScope.pageMetaTitle = '';

        $rootScope.$on('$viewContentLoaded', function () {
          $anchorScroll();
        });

        $rootScope.$watch('containerClass', function(n, o){
          o && $('body').removeClass(o);
          $('body').addClass(n);
        })

        $rootScope.$on('$routeChangeSuccess',function(e, current, previous){
          $rootScope.containerClass = current ? current.$$route.containerClass || '' : '';
        });

        $rootScope.setPageTitle = function(){
          var arr = _.flatten( [].slice.call(arguments) );
          this.pageTitle = arr.join('<span class="page-title-sep"></span>'); //glyphicon glyphicon glyphicon-menu-right
          arr.unshift(this.config.brand);
          this.pageMetaTitle = arr.reverse().join(' &raquo; ');
        };



      }
    ]);

}());
