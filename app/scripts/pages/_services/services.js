'use strict';
angular.module('Services', [])

.factory('visitService',[
  '$http',
  '$q',
  function($http, $q)
  {
    var RootMethods = {
      getVisits : function(){
        return [
          {
            id: '2',
            plant : 'Schneider Electric, Brossard',
            visitor : 'Sam',
            date : new Date('August 10, 2015'),
            visited : false
          },
          {
            id: '3',
            plant : 'Schneider Electric, Richmond',
            visitor : 'Sam',
            date : new Date('August 28, 2015'),
            visited : false
          },
          {
            id: '1',
            plant : 'Schneider Electric, Edmonton',
            visitor : 'Sam',
            date : new Date('July 15, 2015'),
            visited : true
          }
        ];
      },
      getVisitDetails : function(visitId){
        var visits = {
          1: {
            id: '1',
            plant : 'Edmonton',
            visitor : 'Sam',
            date : new Date('July 15, 2015'),
            visited : true
          },
          2: {
            id: '2',
            plant : 'Brossard',
            visitor : 'Sam',
            date : new Date('August 10, 2015'),
            visited : false
          },
          3: {
            id: '3',
            plant : 'Richmond',
            visitor : 'Sam',
            date : new Date('August 28, 2015'),
            visited : false
          }
        };
        return visits[visitId];

      }

    };
    return RootMethods;
  }])

  .factory('plantService',[
    '$http',
    '$q',
    function($http, $q)
    {
      var RootMethods = {
        getPlantList : function(){
          return [
            {
              id: '1',
              name : 'EDMONTON',
              location : 'EDMONTON',
              address : '12825 144 St NW, Edmonton, AB T5L 4N7, Canada',
              manager : 'Jim Langer ',
              managerContact : '+1 780-453-3562',
              headOfOperations : 'Gary kriston',
              headOfOperationsContact: '+1 780-453-3563',
              emergencyContact : '+1 780-453-3561',
              lat : '53.586503',
              long : '-113.568016'
            },
            {
              id: '2',
              name : 'Brossard',
              location : 'Brossard',
              address : '12825 144 St NW, Brossard, AB T5L 4N7, Canada',
              manager : 'Jim Langer ',
              managerContact : '+1 780-453-3562',
              headOfOperations : 'Gary kriston',
              headOfOperationsContact: '+1 780-453-3563',
              emergencyContact : '+1 780-453-3561',
              lat : '53.586503',
              long : '-113.568016'
            },
            {
              id: '3',
              name : 'Richmond',
              location : 'Richmond',
              address : '12825 144 St NW, Richmond, AB T5L 4N7, Canada',
              manager : 'Jim Langer ',
              managerContact : '+1 780-453-3562',
              headOfOperations : 'Gary kriston',
              headOfOperationsContact: '+1 780-453-3563',
              emergencyContact : '+1 780-453-3561',
              lat : '53.586503',
              long : '-113.568016'
            }
          ];

        },
        getPlant : function(plantId){
          var plants = {
            1: {
              id: '1',
              name : 'EDMONTON',
              location : 'EDMONTON',
              address : '12825 144 St NW, Edmonton, AB T5L 4N7, Canada',
              manager : 'Jim Langer ',
              managerContact : '+1 780-453-3562',
              headOfOperations : 'Gary kriston',
              headOfOperationsContact: '+1 780-453-3563',
              emergencyContact : '+1 780-453-3561',
              lat : '53.586503',
              long : '-113.568016'
            },
            2: {
              id: '2',
              name : 'Brossard',
              location : 'Brossard',
              address : '12825 144 St NW, Brossard, AB T5L 4N7, Canada',
              manager : 'Jim Langer ',
              managerContact : '+1 780-453-3562',
              headOfOperations : 'Gary kriston',
              headOfOperationsContact: '+1 780-453-3563',
              emergencyContact : '+1 780-453-3561',
              lat : '53.586503',
              long : '-113.568016'
            },
            3: {
              id: '3',
              name : 'Richmond',
              location : 'Richmond',
              address : '12825 144 St NW, Richmond, AB T5L 4N7, Canada',
              manager : 'Jim Langer ',
              managerContact : '+1 780-453-3562',
              headOfOperations : 'Gary kriston',
              headOfOperationsContact: '+1 780-453-3563',
              emergencyContact : '+1 780-453-3561',
              lat : '53.586503',
              long : '-113.568016'
            }
          };
          return plants[plantId];

        },
        addPlant : function(){

          return 1;

        }


      };
      return RootMethods;
    }])

    .factory('userService',[
      '$http',
      '$q',
      function($http, $q)
      {
        var RootMethods = {
          getUserList : function(){
            return [
              {
                id: '1',
                name : 'Root',
                role : 'administrator',
                email : 'root@eap.sg'
              },
              {
                id: '2',
                name : 'author',
                role : 'author',
                email : 'author@eap.sg'
              }
            ];

          },
          getUser : function(userId){
            var users = {
              1: {
                id: '1',
                name : 'Root',
                role : 'administrator',
                email : 'root@eap.sg',
                userName: 'root',
                password: '',
                confirmPassword: '',
                pinCode: '401123',
                location: 'pune',
                phone: '9898989898',
                fax: '11111111111',
                lat: '18.5203',
                long: '73.8567',
                address: 'No address'
              },
              2: {
                id: '2',
                name : 'author',
                role : 'author',
                email : 'author@eap.sg'
              }
            };
            return users[userId];

          },
          addUser : function(){

            return 1;

          }


        };
        return RootMethods;
      }])
