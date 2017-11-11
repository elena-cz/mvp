angular.module('App')

// .factory('Characters', ['$resource', 
//   function($resource) {
//     return $resource('/characters', {}, {
//       query: {
//         method: 'GET'
//       }
//     });
//   }]);

  .service('Characters', ['$http', 
    function($http) {

      this.getAll = function(callback) {

        console.log('In getAll');

        $http.get('/characters')
        .then( (data) => {
            console.log(data);
            callback(data.data);
          }) 
        .catch((err) => {
            console.log(err);
          });
    };
  }]);