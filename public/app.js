// Create Angular module
angular.module('App', ['ngSanitize'])

.controller('AppCtrl', function(Characters) {

  this.username = 'elena';
  this.characters = null;
  this.userPrefs = null;  
  this.savedLetters = [];


  this.charactersResults = (data) => {
    this.characters = data;
  };

  this.userPrefsResults = (data) => {
    this.userPrefs = data;
    this.savedLetters = Object.keys(this.userPrefs.letters).map((letter) => letter.toUpperCase());
  };


  Characters.getAll(this.charactersResults);
  Characters.getUserPrefs(this.username, this.userPrefsResults);

})

.component('app', {

  controller: 'AppCtrl',
  templateUrl: 'templates/app.html'

});