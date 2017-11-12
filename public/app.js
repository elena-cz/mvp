// Create Angular module
angular.module('App', ['ngSanitize'])

.controller('AppCtrl', function(Characters) {

  this.username = 'elena';

  this.charactersResults = (data) => {
    console.log('data in charactersResults', data);
    this.characters = data;
  }

  console.log('In app controller');

  Characters.getAll(this.charactersResults);
})

.component('app', {

  controller: 'AppCtrl',
  templateUrl: 'templates/app.html'

});