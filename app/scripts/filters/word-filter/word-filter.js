(function () {
  'use strict';
  angular.module('Filters')

  .filter('word', [function() {
    return function(string, index) {
      if(!string) {return '' ;}
      index--;
      var arr = string.split(' ');
      return arr[index] ? arr[index] : '' ;
    };
  }]);

}());
