// Create Angular module
angular.module('App', [])

.controller('AppCtrl', function(Characters) {
  
  this.characters = {};

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