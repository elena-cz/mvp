angular.module('App')

  .service('Characters', ['$http', 
    function($http) {

      this.getAll = function(callback) {

        $http.get('/characters')
        .then( (data) => {
            callback(data.data);
          }) 
        .catch((err) => {
            console.log(err);
          });
    };
  }]);