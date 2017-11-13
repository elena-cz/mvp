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

    this.savePhrase = function(username, letter, phrase) {

      var data = {username: username, letter: letter, phrase: phrase };


      $http.post('/userprefs', data)
      .then( (data) => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      })

    };

    this.getUserPrefs = function(username, callback) {
      
      $http.get(`/userprefs/${username}`)
        .then( (data) => {
          console.log('response from getUserPrefs', data.data);
          callback(data.data[0]);
        }) 
        .catch((err) => {
            console.log(err);
          });
    };

  }]);