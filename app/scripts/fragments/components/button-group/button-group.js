(function () {
  'use strict';
  angular.module('Components')
  .directive('buttonGroup', [
    function() {
      return {
        restrict: 'E',
        require: '^ngModel',
        scope: {ngModel: '=', config: '=?', name: '=?', ngDisabled: '=', ngRequired: '&'},
        templateUrl: 'scripts/fragments/components/button-group/view/button-group.html',
        link: function(scope, element, attrs, ctrl) {
          var config = angular.extend({
            multiple : true
          }, scope.config);
          scope.isSelected = function(value) {
            if( angular.isArray( scope.ngModel ) ){
              return scope.ngModel.indexOf(value) !== -1;
            }
            return scope.ngModel === value;
          };
          ctrl.$isEmpty = function(val){
            return (val && !val.length); //override to support checking empty arrays
          };
          var validate = function() {
            var isInvalid = (scope.ngRequired() || attrs.required) && ctrl.$isEmpty(scope.ngModel);
            ctrl.$setValidity('required', !isInvalid);
          };
          function update(){
            validate();
            element.toggleClass('ng-valid', ctrl.$valid);
            element.toggleClass('ng-invalid', ctrl.$invalid);
            element.toggleClass('ng-dirty', ctrl.$dirty);
            element.toggleClass('ng-pristine', ctrl.$pristine);
          }
          element.delegate('.btn', 'click', function(){
            var $t = $(this), value;
            value = $t.attr('value');
            scope.$apply(function(){
              if( $t.hasClass('active') ){
                scope.ngModel = config.multiple ? _.without( scope.ngModel, value ) : value;
              } else if( !scope.isSelected(value) ) {
                if( config.multiple ){
                  scope.ngModel.push(value);
                } else {
                  scope.ngModel = value;
                }
              }
            });
          });
          scope.$watch('ngModel', update, true);
        }
      };
    }]);
  }());
