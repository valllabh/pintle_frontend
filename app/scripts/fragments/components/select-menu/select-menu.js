(function () {
  'use strict';
  angular.module('Components')
  .directive('selectMenu', ['componentHelper','$rootScope','$timeout', function(componentHelper,$rootScope,$timeout) {
    return {
      restrict: 'E',
      scope: {
        'data' : '='
      },
      templateUrl: 'scripts/fragments/components/select-menu/view/select-menu.html',
      link: function(s, e){
        s.eid = componentHelper.getId();
        var setValue = function( value ){
          s.$apply(function(){
            s.data.selected = value;
          });
        };
        e.delegate('.dropdown-menu li a', 'click', function(){
          var $t = $(this);
          setValue( $t.attr('value').trim() );
        });
        $timeout(function(){
          s.$watch('selectedItem', function (val) {
            if(val) {
              s.data.selected = val;
            }
          }, true);
        });
        s.$on('$destroy',function() {
          e.remove();
        });
      }
    };
  }]);
}());
