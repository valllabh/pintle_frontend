(function () {
   'use strict';
   angular.module('datePicker')
     .constant('datePickerConfig', {
       template: 'verndor/datepicker/templates/datepicker.html',
       view: 'month',
       views: ['year', 'month', 'date', 'hours', 'minutes'],
       step: 5
     });
}());
