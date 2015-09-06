(function () {
  'use strict';

  angular.module('UtilModule', [])
  .factory('Util', [function() {

    return {
      pluckOnly : function(object, keys){
        var _object = {};
        for (var key in object) {
          if (object.hasOwnProperty(key) && keys.indexOf(key) !== -1 ) {
            _object[key] = object[key];
          }
        }
        return _object;
      },
      notBlank : function(v){
        return v !== '' && v !== undefined && v !== null;
      },
      trim : function(v){
        return v.trim();
      },
      chunk : function(object, chunks) {
        var _chunk = function( a, n ) {
          if ( !a.length ) {
            return [];
          }
          return [ a.slice( 0, n ) ].concat( _chunk( a.slice(n), n) );
        };
        return _chunk( _.toArray(object), chunks );
      },
      getDiff: function(val1, val2) {

        var data = {
          value: (val1 - val2)
        };

        return data;
      },
      getIndicator: function(val) {
        return val < 0 ? 'fall' : val ? 'growth' : '';
      },
      getPer: function(val1, val2) {
        return val1 && val2 ? ( ( val1 / val2 ) * 100) : null;
      },
      remarksIdGenerator: function(opt) {
        var key = '';
        for( var i in opt ){
          if( opt.hasOwnProperty( i ) ){
            key += i + opt[i];
          }
        }

        return key.toUpperCase();
      }
    };
  }]);

}());
